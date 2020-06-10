import React from 'react';
import './App.css';


class Square extends React.Component {

    render() {
        return (
            <div className="square">
                <div className="city">{this.props.city}</div>
                <div className="temp">{this.props.temp}</div>
            </div>
        )
    }
}

export default Square