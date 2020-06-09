import React from 'react';
import './App.css';
import { Nav } from 'react-bootstrap';

class SideNav extends React.Component {

    render() {
        return (
            <div className="drawer">
                <Nav className="flex-column">
                    <Nav.Link href="/India" className={window.location.href.includes("India") ? "item-selected" : "item-not-selected"}>India</Nav.Link>
                    <Nav.Link href="/America" className={window.location.href.includes("America") ? "item-selected" : "item-not-selected"}>America</Nav.Link>
                    <Nav.Link href="/China" className={window.location.href.includes("China") ? "item-selected" : "item-not-selected"}>China</Nav.Link>
                    <Nav.Link href="/Italy" className={window.location.href.includes("Italy") ? "item-selected" : "item-not-selected"}>Italy</Nav.Link>
                    <Nav.Link href="/Peru" className={window.location.href.includes("Peru") ? "item-selected" : "item-not-selected"}>Peru</Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default SideNav