import React from 'react';
import { NavLink } from 'react-router-dom';
import amazon from "../images/amazon.png";
import google from "../images/google.png";

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/integration">Integration</NavLink>
                        </li>
                        <li className="nav-item">
                        <img className="footer-img" src={amazon} alt="google" />
                        </li>
                        <li className="nav-item">
                        <img className="footer-img" src={google} alt="google" />
                        </li>
                    </ul>
                    </div>
            </nav>
        </div>
    )
}

export default Footer;
