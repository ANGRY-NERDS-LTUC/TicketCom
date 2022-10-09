import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'
export default function Footer() {
  const navigate=useNavigate()
  return (
    <footer className="footer-distributed">

      <div className="footer-left">

        <h3>TICKET<span id='dotcom'>.COM</span></h3>

        <p className="footer-links">
          <Link to='/'>Home</Link>
          <Link to='/aboutUs'>About Us</Link>
          <Link to='/login'>Login</Link>
          {/* <a  onClick={navigate('/about')} className="link-1">Home</a>
          
          <a >Blog</a>
        
          <a href="#">Pricing</a>
        
          <a href="#">About</a>
          
          <a href="#">Faq</a>
          
          <a href="#">Contact</a> */}
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
          <p><a href="mailto:support@company.com">support@ticketcom.com</a></p>
        </div>

      </div>

      <div className="footer-right">

        <p className="footer-company-about">
          <span>About the company</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
        </p>

        <div className="footer-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          {/* <a href="#"><i className="fa fa-linkedin"></i></a> */}
          {/* <a href="#"><i className="fa fa-github"></i></a> */}

        </div>

      </div>

    </footer>
  )
}
