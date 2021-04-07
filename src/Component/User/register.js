import React from "react";
import "./register.css";
import RegisterBank from "./registerBank.jpg";
import Header from "../Layout/homeNavBar";
import Footer from "../Home/footer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../Action/authActions";
import Success from "./animation.gif";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      phone: "",
      transactionPassword: "",
      pincode: "",
      city: "",
      state: "",
      fulladdress: "",
      err: ""
    };
  }

  nameChangeHandler = (e) => {
    this.setState({ name: e.target.value, err: "" });
  };
  emailChangeHandler = (e) => {
    this.setState({ email: e.target.value, err: "" });
  };
  passwordChangeHandler = (e) => {
    this.setState({ password: e.target.value, err: "" });
  };
  password2ChangeHandler = (e) => {
    this.setState({ password2: e.target.value, err: "" });
  };
  phoneChangeHandler = (e) => {
    this.setState({ phone: e.target.value, err: "" });
  };
  transactionPasswordChangeHandler = (e) => {
    this.setState({ transactionPassword: e.target.value, err: "" });
  };
  pincodeChangeHandler = (e) => {
    this.setState({ pincode: e.target.value, err: "" });
  };
  cityChangeHandler = (e) => {
    this.setState({ city: e.target.value, err: "" });
  };
  stateChangeHandler = (e) => {
    this.setState({ state: e.target.value, err: "" });
  };
  fulladdressChangeHandler = (e) => {
    this.setState({ fulladdress: e.target.value, err: "" });
  };

  openAccountHandler = () => {
    const {
      name,
      email,
      password,
      password2,
      phone,
      transactionPassword,
      pincode,
      city,
      state,
      fulladdress
    } = this.state;

    if (
      !name ||
      !email ||
      !password ||
      !password2 ||
      !phone ||
      !transactionPassword ||
      !pincode ||
      !city ||
      !state ||
      !fulladdress
    ) {
      this.setState({ err: "All fields are Required" });
    } else {
      this.props.dispatch(registerUser(this.state));
    }
  };

  renderform = () => {
    if (this.props.data === "") {
      return (
        <>
          <div className="col-xl-4 outerform">
            <center>
              <h5
                className="registerp"
                style={{ marginBottom: "20px", textDecoration: "underline" }}
              >
                Fill The Form To Open A Account{" "}
              </h5>
              <span className="registerp error">{this.props.err}</span>
              <span className="registerp error">{this.state.err}</span>
            </center>
            <div className="formdiv">
              <div className="mainform">
                <div className="row">
                  <div className="col-md-6">
                    <p className="registerp">Full Name:</p>
                    <input
                      placeholder="Name"
                      className="registerInput"
                      value={this.state.name}
                      onChange={this.nameChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="registerp">Password:</p>
                    <input
                      type="password"
                      placeholder="Password"
                      className="registerInput"
                      value={this.state.password}
                      onChange={this.passwordChangeHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="registerp">Email Address:</p>
                    <input
                      type="email"
                      placeholder="Email"
                      className="registerInput"
                      value={this.state.email}
                      onChange={this.emailChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="registerp">Confirm Password:</p>
                    <input
                      type="password"
                      placeholder="Password"
                      className="registerInput"
                      value={this.state.password2}
                      onChange={this.password2ChangeHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="registerp">Phone:</p>
                    <input
                      placeholder="eg: 9876543214"
                      className="registerInput"
                      value={this.state.phone}
                      onChange={this.phoneChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="registerp">Transaction Password:</p>
                    <input
                      type="password"
                      placeholder="Transaction Password"
                      className="registerInput"
                      value={this.state.transactionPassword}
                      onChange={this.transactionPasswordChangeHandler}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <p className="registerp">City:</p>
                    <input
                      placeholder="City"
                      className="registerInput"
                      value={this.state.city}
                      onChange={this.cityChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <p className="registerp">State:</p>
                    <input
                      placeholder="State"
                      className="registerInput"
                      value={this.state.state}
                      onChange={this.stateChangeHandler}
                    />
                  </div>
                </div>
                <p className="registerp">Full Address:</p>
                <input
                  type="textarea"
                  placeholder="Hansda Road Gulaabgh"
                  className="registerInput"
                  value={this.state.fulladdress}
                  onChange={this.fulladdressChangeHandler}
                />
                <div className="row">
                  <div className="col-md-6">
                    <p className="registerp">Pincode:</p>
                    <input
                      placeholder="eg: 854326"
                      className="registerInput"
                      value={this.state.pincode}
                      onChange={this.pincodeChangeHandler}
                    />
                  </div>
                  <div className="col-md-6">
                    <button
                      onClick={this.openAccountHandler}
                      className="btn btn-primary"
                    >
                      Open Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="col-xl-4 outerform">
            <center>
              <img
                src={Success}
                className="successimg"
                alt="success"
                height="200px"
                width="200px"
              />
            </center>
            <div>
              <center>
                <h3
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    marginTop: "10px",
                    padding: "5px"
                  }}
                >
                  Congo! Your Account Is Now Opened
                </h3>
                <p className="registerp">
                  Account No: {this.props.data.account}
                </p>
                <h5
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    marginTop: "10px",
                    padding: "5px"
                  }}
                >
                  Check Your Email for More Information
                </h5>
                <p className="registerp">
                  Click Here to Login : <Link to="/login">Login</Link>
                </p>
              </center>
            </div>
          </div>
        </>
      );
    }
  };

  renderRegister = () => {
    return (
      <>
        <Header />
        <div className="container">
          <div className="row">
            <center>
              <h1 className="registertitle">Register With Us</h1>
            </center>
            <div className="col-xl-8 registerimage">
              <img src={RegisterBank} className="registerBank" alt="bank" />
              <div className="centered">
                <h1>Bank Berg Finance</h1>
                <p>One Stop Solution For All Your Banking Needs</p>
                <p className="registerp">
                  Click Here to Login : <Link to="/login">Login</Link>
                </p>
              </div>
            </div>
            {this.renderform()}
          </div>
        </div>
        <Footer />
      </>
    );
  };

  render() {
    return <>{this.renderRegister()}</>;
  }
}

function mapStatetoProps(data) {
  if (!data.Register) {
    return {
      data: "",
      err: ""
    };
  } else {
    if (data.Register.error) {
      return {
        data: "",
        err: data.Register.error
      };
    } else {
      return {
        data: data.Register,
        err: ""
      };
    }
  }
}

Register.protoType = {
  dispatch: PropTypes.func
};

export default connect(mapStatetoProps)(Register);
