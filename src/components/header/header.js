import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {

    return (
        <div>
            <nav className="nav">
                <Link to="/" className="link">Home</Link>
                <Link to="/form" className="link">Form</Link>
                <Link to="/packages" className="link">Packages</Link>
            </nav>
        </div>
    );
}

export default Header;