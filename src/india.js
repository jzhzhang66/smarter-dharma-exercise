import React from 'react';
import { useApi } from './utils';
import Square from './square';
import { chunk } from 'lodash';

class India extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            information: []
        }
        this.cleanInfo = this.cleanInfo.bind(this);
    }

    cleanInfo(india) {
        var i;
        let toSet = []
        for (i = 0; i < india.length; i++) {
            toSet.push({
                city: india[i],
                temp: this.state.information[i].data[0].temp
            })
        }
        this.setState(() => {
            return {
                information: toSet 
            }
        })
        console.log(this.state.information)
    }

    componentDidMount() {
        const india = ["Mumbai", "Delhi"]
        // , "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow",
        //     "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik", 
        //     "Faridabad", "Meerut", "Rajkot", "Varanasi", "Srinagar", "Aurangabad", "Gaya"]
        useApi(india).then((res) => {
            this.setState(() => {
                return {
                    loading: false,
                    information: res
                }
            })
            this.cleanInfo(india)
        })
    }

 

    render() {
        let toRender = this.state.information.map(x => <Square city={x.city} temp={x.temp} />)
        toRender = chunk(toRender, 5)
        return (
            <div className="main-container">
                {toRender.map(x => <div className="row">{x}</div> )}
            </div>
        )
    }
}

export default India