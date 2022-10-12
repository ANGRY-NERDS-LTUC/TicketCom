import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Header() {
  const context = useContext(AuthContext);
  const user = cookies.get("data");
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <span className="nav-brand">
            <Link to="/" className=" header-title">
              TICKET<span id="dotcom">.COM</span>
            </Link>
          </span>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <span className="nav-link">
                  <Link to="/" className="link">
                    <i class="fa-solid fa-house"></i>
                    Home
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <Link to="/aboutUs" className="link">
                    <i class="fa-sharp fa-solid fa-circle-info"></i>
                    About Us
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.type === "client" && (
                    <>
                      <Link to="/bookingList" className="link">
                        <i class="fa-sharp fa-solid fa-plane-departure"></i>
                        Booking List
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.type === "company" && (
                    <>
                      <Link to="/createPackage" className="link">
                        <i class="fa-solid fa-circle-plus"></i>
                        Create Package
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.type === "company" && (
                    <>
                      <Link to="/companyDashboard" className="link">
                        <i class="fa-solid fa-suitcase-rolling"></i>
                        Company Dashboard
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.role === "admin" && (
                    <>
                      <Link to="/adminDashboard" className="link">
                        <i class="fa-solid fa-suitcase-rolling"></i>
                        Admin Dashboard
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.type === "client" && (
                    <>
                      <Link to="/wishlist" className="link">
                        <i class="fa-solid fa-star"></i>
                        Wishlist
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.type === "client" && (
                    <>
                      <Link to="/cart" className="link">
                        <i class="fa-solid fa-cart-shopping"></i>
                        Cart
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <Link to="/chathome" className="link">
                    <i class="fa-solid fa-comment"></i>
                    Chat
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user && (
                    <button
                      onClick={() => {
                        context.logout();
                        navigate("/", { replace: true });
                      }}
                      className="link"
                      id="logButton"
                    >
                      <i class="fa-solid fa-right-from-bracket"></i>
                      Logout
                    </button>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {!user && (
                    <>
                      <Link to="/login" className="link" id="logButton">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        Login
                      </Link>
                    </>
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
