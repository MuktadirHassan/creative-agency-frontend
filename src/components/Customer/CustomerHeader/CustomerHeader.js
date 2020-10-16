import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logos/logo.png'
const CustomerHeader = () => {
    return (
        <div className="container navbar">
            <div className="navbar-brand">
                <Link to="/">
                    <img src={logo} alt="" width="180px"/>
                </Link>
            </div>
            <ul className="ml-auto">
                <div className="nav-item">
                    Muktadir Hassan
                </div>
            </ul>
        </div>
    );
};

export default CustomerHeader;