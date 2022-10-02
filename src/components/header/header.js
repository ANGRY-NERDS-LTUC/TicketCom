import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./header.css";
import {AuthContext} from "../../context/AuthContext";

function Header() {
  const context = useContext(AuthContext)
  const navigate = useNavigate()


  return (
    <>
      <nav className="nav">
        <div className="wrapper">
          <Link to="/" className="link">
            Home
          </Link>
          {context.currentUser?.user?.type === 'company' && <Link to="/createPackage" className="link">
            Create Package
          </Link>}
          {context.currentUser?.user?.type === 'company' && <Link to="/companyPackages" className="link">
            Company Packages
          </Link>}
          {context.currentUser?.user?.type === 'admin' && <Link to="/adminPackages" className="link">
            Admin Packages
          </Link>}
          {context.currentUser?.user?.type === 'client' && <Link to="/wishlist" className="link">
            Wishlist
          </Link>}
          {context.currentUser?.user?.type === 'client' && <Link to="/cart" className="link">
            Cart
          </Link>}
          <Link to="/chathome" className="link">
            Chat

          </Link>
          {context.currentUser?.user && <button onClick={() => {
            context.logout()
            navigate('/', {replace: true})
          }} className="link">
            Logout
          </button>}
          {!context.currentUser?.user && <Link to="/login" className="link">
            Login
          </Link>}
        </div>
      </nav>
    </>
  );
}

export default Header;
