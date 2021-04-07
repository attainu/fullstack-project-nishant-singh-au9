import React, { Component } from "react";
import Avatar from "./avatar.png";
import Logo from "../../logo.png";
import "./login.css";
import { Link } from "react-router-dom";
import validator from "validator";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../Action/authActions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      err: ""
    };
    this.err1 = "";
  }

  emailChangeHandler = (e) => {
    this.setState({
      email: e.target.value,
      err: ""
    });
  };

  passwordChangeHandler = (e) => {
    this.setState({
      password: e.target.value,
      err: ""
    });
  };

  LoginHandler = () => {
    if (!this.state.email || !this.state.password) {
      this.setState({
        err: "Both email and password feilds are required"
      });
    } else {
      if (!validator.isEmail(this.state.email)) {
        this.setState({ err: "Invalid email" });
      } else {
        let user = {
          email: this.state.email,
          password: this.state.password
        };
        document.getElementById("loginbtnl").innerText = "Taking you in..";
        this.props.dispatch(loginUser(user));
      }
    }
  };

  renderLogin = () => {
    if (this.props.passerr || this.props.emailerr) {
      if (document.getElementById("loginbtnl")) {
        document.getElementById("loginbtnl").innerText = "Login";
      }
    }
    if (sessionStorage.getItem("ltk")) {
      this.props.history.push("/dashboard");
    } else {
      return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-6 justify-content-center align-items-center">
                <div
                  className="justify-content-center align-items-center"
                  style={{
                    color: "white",
                    marginBottom: "100px",
                    marginTop: "20px"
                  }}
                >
                  <center>
                    <img src={Logo} alt="logo" className="homelogo" />
                    <h1 style={{ marginTop: "5px" }}>Bank Berg Finance</h1>
                    <p>One Stop Solution For All Your Banking Needs</p>
                  </center>
                </div>
              </div>
              <div className="col-md-6">
                <div className="formdiv">
                  <div className="loginbox">
                    <center>
                      <img src={Avatar} alt="avatar" id="avatarimg" />
                    </center>
                    <center>
                      <h3>Login</h3>
                    </center>
                    <h6 className="error">{this.props.emailerr}</h6>
                    <h6 className="error">{this.state.err}</h6>
                    <p className="loginp">Email</p>
                    <input
                      type="text"
                      placeholder="Enter your Email"
                      value={this.state.email}
                      onChange={this.emailChangeHandler}
                    />
                    <h6 className="error">{this.props.passerr}</h6>
                    <p className="loginp">Password</p>
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      value={this.state.password}
                      onChange={this.passwordChangeHandler}
                      id="myInput"
                    />
                    <br />
                    <button
                      className="btn btn-primary"
                      id="loginbtnl" 
                      onClick={this.LoginHandler}
                    >
                      Login
                    </button>
                    <p className="loginp">
                      Don't Have Account <Link to="/register">Click Here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.renderLogin()}</>;
  }
}

function mapStatetoProps(state) {
  if (!state.Login) {
    return {
      token: null,
      passerr: "",
      emailerr: ""
    };
  } else {
    if (state.Login.passwordincorrect) {
      return {
        token: null,
        passerr: "Incorrect Password",
        emailerr: ""
      };
    } else if (state.Login.emailnotfound) {
      return {
        token: null,
        passerr: "",
        emailerr: "Email is not registered"
      };
    } else {
      return {
        token: state.Login.token,
        passerr: "",
        emailerr: ""
      };
    }
  }
}

Login.protoType = {
  dispatch: PropTypes.func
};

export default connect(mapStatetoProps)(Login);
