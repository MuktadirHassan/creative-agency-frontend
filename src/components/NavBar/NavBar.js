import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logos/logo.png';

const NavBar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light py-3">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="" width="180px"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link mr-3">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#portfolio" className="nav-link mr-3">Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#our-team" className="nav-link mr-3">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="#contact-us" className="nav-link mr-3">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login' className="btn btn-primary">Login</Link>
                    </li>
                </ul>
                
            </div>
            </nav>
        </div>
        
    );
};

export default NavBar;