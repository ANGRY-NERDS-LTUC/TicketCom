import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { AuthContext } from "../../context/AuthContext";
import { Container, UncontrolledCarousel, Spinner } from "reactstrap";

function Header() {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="">
            <Link to="/" className="websiteName">
              TICKET.COM
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="">
                  <i class="fa-solid fa-house"></i>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i class="fa-sharp fa-solid fa-circle-info"></i>
                  <Link to="/aboutUs" className="link">
                    About Us
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {context.currentUser?.user?.type === "company" && (
                    <>
                      <i class="fa-solid fa-circle-plus"></i>
                      <Link to="/createPackage" className="link">
                        Create Package
                      </Link>
                    </>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {context.currentUser?.user?.type === "company" && (
                    <>
                      <i class="fa-solid fa-suitcase-rolling"></i>
                      <Link to="/companyPackages" className="link">
                        Company Packages
                      </Link>
                    </>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {context.currentUser?.user?.role === "admin" && (
                    <>
                      <i class="fa-solid fa-suitcase-rolling"></i>
                      <Link to="/adminPackages" className="link">
                        Admin Packages
                      </Link>
                    </>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {context.currentUser?.user?.type === "client" && (
                    <>
                      <i class="fa-solid fa-star"></i>
                      <Link to="/wishlist" className="link">
                        Wishlist
                      </Link>
                    </>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {context.currentUser?.user?.type === "client" && (
                    <>
                      <i class="fa-solid fa-cart-shopping"></i>
                      <Link to="/cart" className="link">
                        Cart
                      </Link>
                    </>
                  )}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  <i class="fa-solid fa-comment"></i>
                  <Link to="/chathome" className="link">
                    Chat
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {context.currentUser?.user && (
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
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="">
                  {!context.currentUser?.user && (
                    <>
                      <i class="fa-solid fa-right-to-bracket"></i>
                      <Link to="/login" className="link">
                        Login
                      </Link>
                    </>
                  )}
                </a>
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
      </nav> */}
    </>
  );
}

export default Header;

{
  /* <Link to="/" className="link">
  Home
</Link>
{
  context.currentUser?.user?.type === 'company' && <Link to="/createPackage" className="link">
    Create Package
  </Link>
}
{
  context.currentUser?.user?.type === 'company' && <Link to="/companyPackages" className="link">
    Company Packages
  </Link>
}
{
  context.currentUser?.user?.type === 'admin' && <Link to="/adminPackages" className="link">
    Admin Packages
  </Link>
}
{
  context.currentUser?.user?.type === 'client' && <Link to="/wishlist" className="link">
    Wishlist
  </Link>
}
{
  context.currentUser?.user?.type === 'client' && <Link to="/cart" className="link">
    Cart
  </Link>
}
<Link to="/chathome" className="link">
  Chat
</Link>
{
  context.currentUser?.user && <button onClick={() => {
    context.logout()
    navigate('/', { replace: true })
  }} className="link">
    Logout
  </button>
}
{
  !context.currentUser?.user && <Link to="/login" className="link">
    Login
  </Link>
} */
}
