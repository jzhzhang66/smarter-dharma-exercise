import React from 'react';
import {useApi} from './utils';

class India extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            returned: [],
            loading: true, 
            information: []
        }
    }
    
    componentDidMount() {
        const India = ["Mumbai", "Delhi", "Bangalore"]
        useApi('Mumbai').then((res) => {
            console.log(res.data[0].temp)
            this.setState(() => {
                return {
                    returned: res,
                    loading: false
                }
            })
        })
    }

    render() {
        return (
           <div></div> 
        )
    }
}

export default India