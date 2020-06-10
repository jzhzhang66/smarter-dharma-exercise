import React from 'react';
import { useApi, emoji } from './utils';
import Square from './square';
import { chunk } from 'lodash';

class UnitedStates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            information: []
        }
        this.cleanInfo = this.cleanInfo.bind(this);
    }

    cleanInfo(cities) {
        var i;
        let toSet = []
        for (i = 0; i < cities.length; i++) {
            toSet.push({
                city: cities[i],
                temp: this.state.information[i].data[0].temp
            })
        }
        this.setState(() => {
            return {
                information: toSet 
            }
        })
    }

    componentDidMount() {
        const usCities = ["Rochester", "Vancouver", "Boston", "Baltimore", "Miami", "Houston", "Dallas", "Los Angelos", "Philadelphia", "San Diego",
    "San Antonio", "Charlotte", "Seattle", "Memphis", "Atlanta", "Sacramento", "Kansas City", "Irvine", "San Francisco", "Tampa", 
    "Oakland", "Cleveland", "Wichita", "Honolulu", "Pittsburgh", "Detroit", "Portland", "Nashville", "Las Vegas", "Raleigh"]
        useApi(usCities).then((res) => {
            this.setState(() => {
                return {
                    loading: false,
                    information: res
                }
            })
            this.cleanInfo(usCities)
        })
    }

 

    render() {
        let toRender = this.state.information.map(x => <Square city={x.city} temp={x.temp + " °C " } icon={emoji(x.temp)}/>)
        toRender = chunk(toRender, 5)
        return (
            <div>
                {toRender.map(x => <div className="row">{x}</div> )}
            </div>
        )
    }
}

export default UnitedStates 