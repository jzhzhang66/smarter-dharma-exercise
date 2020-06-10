import React from 'react';
import './App.css';
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';

class SideNav extends React.Component {

    render() {
        return (
            <div className="drawer">
                <Nav className="flex-column">
                    <Link to="/India" className={this.props.location.pathname.includes("India") ? "item-selected" : "item-not-selected"}>India</Link>
                    <Link to="/UnitedStates" className={this.props.location.pathname.includes("UnitedStates") ? "item-selected" : "item-not-selected"}>United States</Link>
                    <Link to="/China" className={this.props.location.pathname.includes("China") ? "item-selected" : "item-not-selected"}>China</Link>
                    <Link to="/Italy" className={this.props.location.pathname.includes("Italy") ? "item-selected" : "item-not-selected"}>Italy</Link>
                    <Link to="/Australia" className={this.props.location.pathname.includes("Australia") ? "item-selected" : "item-not-selected"}>Australia</Link>
                </Nav>
            </div>
        )
    }
}

export default withRouter(SideNav) 