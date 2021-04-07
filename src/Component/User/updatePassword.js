import React from 'react';
import PropTypes, { string } from "prop-types";
import { connect } from "react-redux";
import DashNav from "../Layout/dashNav";
import { updatePassword } from "../../Action/authActions"
import Animation from "./animation.gif"


class UpdatePassword extends React.Component {
    constructor() {
        super();
        this.state = {
            password: "",
            newpassword: "",
            newpassword2: "",
            err: ""
        }
    }

    passwordChangeHandler = (e) => {
        this.setState({ password: e.target.value, err: "" })
    }
    newpasswordchangeHandler = (e) => {
        this.setState({ newpassword: e.target.value, err: "" })
    }
    newpassword2ChangeHandler = (e) => {
        this.setState({ newpassword2: e.target.value, err: "" })
    }

    renderUpdatePassword = () => {
        if (sessionStorage.getItem("ltk")) {
            if (this.props.success) {
                return (
                    <>
                        <div className="loginform">
                            <div className="card" id="logincard">
                                <center>
                                    <img
                                        src={Animation}
                                        className="successimg"
                                        alt="success"
                                        height="200px"
                                        width="200px"
                                    />
                                </center>
                                <center>
                                    <strong> Password Updated!</strong>
                                </center>
                            </div>
                        </div>
                    </>
                )
            } else {
                return (
                    <>
                        <div className="loginform">
                            <div className="card" id="logincard">
                                <center>
                                    <h2>Update Password</h2>
                                </center>
                                <div className="form-group">
                                    <center>
                                        <p style={{ color: "red", fontWeight: "bold" }}>{this.props.err}</p>
                                        <p style={{ color: "red", fontWeight: "bold" }}>{this.state.err}</p>
                                        <p style={{ color: "green", fontWeight: "bold" }}>{this.props.succ}</p>
                                    </center>
                                    <label for="exampleInputPassword3"><b>Current Password:</b></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword3"
                                        placeholder="Enter Password"
                                        onChange={this.passwordChangeHandler}
                                        value={this.state.password}
                                    />

                                    <label for="exampleInputPassword2"><b>New Password:</b></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword2"
                                        placeholder="Enter New Password"
                                        onChange={this.newpasswordchangeHandler}
                                        value={this.state.newpassword}
                                    />

                                    <label for="exampleInputPassword1"><b>Confirm New Password:</b></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Confirm New Password"
                                        onChange={this.newpassword2ChangeHandler}
                                        value={this.state.newpassword2}
                                    />
                                </div>
                                <button
                                    className="btn btn-danger"
                                    id="loginbtn"
                                    onClick={this.submitHandler}
                                >
                                    Update Password
                      </button>
                            </div>
                        </div>
                    </>
                )
            }
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <>
                <DashNav />
                {this.renderUpdatePassword()}
            </>
        )
    }

    submitHandler = () => {
        console.log(this.state)
        this.props.dispatch(updatePassword(this.state))
    }
}

function mapStatetoProps(state) {
    console.log(state)
    if (!state.UpdatePass) {
        return {
            err: "",
            succ: "",
            success: false
        }
    } else {
        if (state.UpdatePass.error) {
            return {
                err: state.UpdatePass.error,
                succ: "", success: false
            }
        } else {
            return { err: "", succ: state.UpdatePass.message, success: true }
        }
    }
}

UpdatePassword.protoType = {
    dispatch: PropTypes.func,
};
export default connect(mapStatetoProps)(UpdatePassword);