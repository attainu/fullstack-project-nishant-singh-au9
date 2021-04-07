import React from "react";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";
import "./dashNav.css";

const DashNav = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark">
        <Link className="navbar-brand homenavleft" to="/">
          <img
            src={Logo}
            width="125"
            height="110"
            alt="logo"
            style={{ Margin: "50px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end homenavright"
          id="navbarNavDropdown"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/dashboard"
              >
                SANPSHOT
              </Link>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="dropbtn">ACCOUNTS</button>
                <div className="dropdown-content">
                  <Link className="navlink" to="/dashboard">Account</Link>
                  <hr/>
                  
                  <Link className="navlink" to="/debitcard">Debit Cards</Link>

                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="dropbtn">PAYMENTS</button>
                <div className="dropdown-content">
                <Link className="navlink" to="/mobilerecharge">Mobile Recharge</Link>
                <br/>
                <Link className="navlink" to="/sendmoney">Send Money</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <button className="dropbtn">SERVICES</button>
                <div className="dropdown-content">
                <Link className="navlink" to="/addmoney">Add Money</Link>
                
                <br/>
                <Link className="navlink" to="/transactions">Get Statements</Link>
                <br/>
                <Link className="navlink" to="/updatepassword">Update Password</Link>
                <br/>
                <Link className="navlink" to="/cheque">Order Cheque</Link>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/logout"
              >
                LOGOUT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DashNav;
