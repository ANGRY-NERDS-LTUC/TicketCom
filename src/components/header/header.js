import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";
// import { Container, UncontrolledCarousel, Spinner } from "reactstrap";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function Header() {
  const context = useContext(AuthContext);
  const user = cookies.get("data");
  // console.log("user", user);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <span className="nav-brand">
            <Link to="/" className="websiteName">
              TICKET.COM
            </Link>
          </span>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
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
                      <Link to="/companyPackages" className="link">
                        <i class="fa-solid fa-suitcase-rolling"></i>
                        Company Packages
                      </Link>
                    </>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {user?.role === "admin" && (
                    <>
                      <Link to="/adminPackages" className="link">
                        <i class="fa-solid fa-suitcase-rolling"></i>
                        Admin Packages
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
                    >
                      Logout
                    </button>
                  )}
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {!user && (
                    <>
                      <Link to="/login" className="link">
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

      {/* <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1603058033439-4bf1ba4b9e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="First slide" />
            </div>
            <div class="carousel-item active">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1664658936499-f26d4ba3f2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://images.unsplash.com/photo-1603058033439-4bf1ba4b9e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div> */}
      {/* Table */}

      {/* <nav className="nav">

        <div className="wrapper">
          <Link to="/" className="link">
            Home
          </Link>
          {user?.type === 'company' && <Link to="/createPackage" className="link">
            Create Package
          </Link>}
          {user?.type === 'company' && <Link to="/companyPackages" className="link">
            Company Packages
          </Link>}
          {user?.type === 'admin' && <Link to="/adminPackages" className="link">
            Admin Packages
          </Link>}
          {user?.type === 'client' && <Link to="/wishlist" className="link">
            Wishlist
          </Link>}
          {user?.type === 'client' && <Link to="/cart" className="link">
            Cart
          </Link>}
          <Link to="/chathome" className="link">
            Chat

          </Link>
          {user && <button onClick={() => {
            context.logout()
            navigate('/', {replace: true})
          }} className="link">
            Logout
          </button>}
          {!user && <Link to="/login" className="link">
            Login
          </Link>}
        </div>
      </nav> */}
    </>
  );
}

export default Header;
