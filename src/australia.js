import React from 'react';
import { useApi, emoji } from './utils';
import Square from './square';
import { chunk } from 'lodash';

class Australia extends React.Component {
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
        const australiaCities = ["Armidale", "Ballina", "Balranald", "Bathurst", "Bega", "Bourke", "Bowral", "Camden", "Cobar", "Cooma",
         "Corowa", "Dubbo", "Forbes", "Forster", "Gosford", "Goulburn", "Grafton", "Inverell", "Kempsey", "Kiama", 
         "Lismore", "Maitland", "Narrabri", "Penrith", "Queanbeyan", "Singleton", "Sydney", "Temora", "Wauchope", "Wellington"]
        useApi(australiaCities).then((res) => {
            this.setState(() => {
                return {
                    loading: false,
                    information: res
                }
            })
            this.cleanInfo(australiaCities)
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

export default Australia