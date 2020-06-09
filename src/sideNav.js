import React from 'react';
import './App.css';
import { Nav } from 'react-bootstrap';

class SideNav extends React.Component {
    render() {
        return (
            <div className="drawer">
                <Nav className="flex-column">
                    <Nav.Link href="/India" className="item">India</Nav.Link>
                    <Nav.Link href="/America" className="item">America</Nav.Link>
                    <Nav.Link href="/China" className="item">China</Nav.Link>
                    <Nav.Link href="/Italy" className="item">Italy</Nav.Link>
                    <Nav.Link href="/Peru" className="item">Peru</Nav.Link>
                </Nav>
            </div>
        )
    }
}

export default SideNav