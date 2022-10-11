import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
export default function Footer() {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>
          TICKET<span id="dotcom">.COM</span>
        </h3>

        <p className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/login">Login</Link>
        </p>

        <p className="footer-company-name">ticket.com © 2022</p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p> Amman , Jordan</p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+9628785889613</p>
        </div>

        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="mailto:support@company.com">support@ticketcom.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About Us</span>
          Ticketcom is an e-commerce website consider as a link between service
          providers and clients. This website provide tickets for tourism trips
          that companies present, then the clients can look at them, book and
          purchase.
        </p>

        <div className="footer-icons">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
