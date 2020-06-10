import React from 'react';
import { useApi } from './utils';
import Square from './square';

class India extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            information: []
        }
    }

    cleanInfo(india) {
        var i;
        const toSet = []
        for (i = 0; i < india.length; i++) {
            console.log(this.state.information[i].data[0].temp)
        }
    }

    componentDidMount() {
        const india = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Surat", "Pune", "Jaipur", "Lucknow",
            "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", "Nashik",
            "Faridabad", "Meerut", "Rajkot", "Vasai Virar", "Varanasi", "Srinagar", "Aurangabad"]
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
        return (
            <div></div >
        )
    }
}

export default India