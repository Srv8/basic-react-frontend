import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Logo</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/integration">Integration</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/price">Pricing</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About us</NavLink>
                        </li>
                    </ul>
                    <div className="navbar-nav ml-auto">
                        <button className="btn-left btn-outline-primary" >Get early access</button>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
