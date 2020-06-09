import React from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap'
import logo from './Logo.png'

class Header extends React.Component {
    render() {
        return (
            <Navbar className="header" >
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default Header 