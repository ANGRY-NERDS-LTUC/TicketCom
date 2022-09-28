import React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {

    return (
        <div>
            <nav className="nav">
                <Link to="/" className="link">Home</Link>
                <Link to="/createPackage" className="link">Create Package</Link>
                <Link to="/companyPackages" className="link">Company Packages</Link>
                <Link to="/adminPackages" className="link">Admin Packages</Link>
                <Link to="/wishlist" className="link">Wishlist</Link>
                <Link to="/cart" className="link">Cart</Link>
            </nav>
        </div>
    );
}

export default Header;