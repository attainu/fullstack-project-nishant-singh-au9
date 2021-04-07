import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./recharge.css"
import DashNav from "../Layout/dashNav";
import Loader from "../../loader.svg";
import { rechargeandbill } from "../../Action/RechargeBillAction"

class Recharge extends React.Component {
    constructor() {
        super();

        this.state = {
            amount: "",
            operator: "",
            number: "7979868224",
            circle: "",
            type: "Mobile Recharge",
            err: "",
            account: "",
            transactionPassword: ""
        }
    }

    amountchangeHndler = (event) => {
        this.setState({
            amount: event.target.value, err: ""
        })
    }

    operatorchangeHndler = (event) => {
        this.setState({
            operator: event.target.value, err: ""
        })
    }

    numberchangeHndler = (event) => {
        this.setState({
            number: event.target.value, err: ""
        })
    }

    circlechangeHndler = (event) => {
        this.setState({
            circle: event.target.value, err: ""
        })
    }

    transactionPasswordchangeHandler = (event) => {
        this.setState({
            transactionPassword: event.target.value, err: ""
        })
        console.log(this.state)
    }

    renderRecharge = () => {
        if (sessionStorage.getItem("ltk")) {
            if (this.state.account) {
                return (
                    <>
                        <div className="loginform">
                            <div className="card" id="logincard">
                                <center>
                                    <h2>Mobile Recharge</h2>
                                </center>
                                <div className="form-group">
                                    <h4>Hi {this.state.account.name},</h4>
                                    <span>Current Balance: {this.state.account.balance}</span>
                                    <p>Money will be debited from Account: {this.state.account.account}</p>
                                    <center>
                                        <p style={{ color: "red", fontWeight: "bold" }}>{this.props.err}</p>
                                        <p style={{ color: "red", fontWeight: "bold" }}>{this.state.err}</p>
                                        <p style={{ color: "green", fontWeight: "bold" }}>{this.props.succ}</p>
                                    </center>

                                    <label htmlFor="exampleInputPassword1"><b>Number:</b></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Mobile Number"
                                        onChange={this.numberchangeHndler}
                                        value={this.state.number}
                                        style={{ marginBottom: "10px" }}
                                    />
                                    {this.renderOperator()}
                                    {this.renderRegion()}<br />
                                    <label htmlFor="exampleInputPassword1"><b>Amount:</b></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Amount"
                                        onChange={this.amountchangeHndler}
                                        value={this.state.amount}
                                    />

                                    <label htmlFor="exampleInputPassword1"><b>Transaction Password:</b></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Transaction Password"
                                        onChange={this.transactionPasswordchangeHandler}
                                        value={this.state.transactionPassword}
                                    />
                                </div>
                                <button
                                    className="btn btn-danger"
                                    id="loginbtn"
                                    onClick={this.submitHandler}
                                >
                                    Proceed to Recharge
                      </button>
                            </div>
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <center><img src={Loader} alt="loader" /></center>
                    </>
                )
            }
        } else {
            this.props.history.push("/login");
        }

    }
    render() {
        return (
            <>
                <DashNav />
                {this.renderRecharge()}
            </>
        )
    }

    submitHandler = () => {
        document.getElementById('loginbtn').innerText = "Recharge in Progress..."
        let { amount, operator, number, circle, type, transactionPassword } = this.state
        if (!amount || !operator || !number || !circle || !type || !transactionPassword) {
            this.setState({
                err: 'All Fields are Required'
            })
        } else {
            let details = {
                amount: amount,
                operator: operator,
                number: number,
                circle: circle,
                type: type,
                transactionPassword: transactionPassword
            }
            this.props.dispatch(rechargeandbill(details))
        }
    }

    renderRegion = () => {
        return (
            <>
                <select className="rechargeselect" onChange={this.circlechangeHndler}>
                    <option value="">Select Circle</option>
                    <option value="Andhra Pradesh & Telangana">Andhra Pradesh & Telangana</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar & Jharkhand">Bihar & Jharkhand</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi NCR">Delhi NCR</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu Kashmir">Jammu Kashmir</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Kolkata">Kolkata</option>
                    <option value="Madhya Pradesh & Chhatisgarh">Madhya Pradesh & Chhatisgarh</option>
                    <option value="Maharashtra & Goa">Maharashtra & Goa</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="North East">North East</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Tamilnadu">Tamilnadu</option>
                    <option value="UP East">UP East</option>
                    <option value="UP West & Uttranchal">UP West & Uttranchal</option>
                    <option value="West Bengal & Andaman Nicobar">West Bengal & Andaman Nicobar</option>
                </select>
            </>
        )
    }

    renderOperator = () => {
        return (
            <>
                <select className="rechargeselect" onChange={this.operatorchangeHndler}>
                    <option value="">Select Operator</option>
                    <option value="Airtel">Airtel</option>
                    <option value="BSNL">BSNL</option>
                    <option value="Jio">Jio</option>
                    <option value="Vi">Vi</option>
                </select>
            </>
        )
    }

    componentDidMount() {
        fetch("https://bankbergfinanceapi.herokuapp.com/api/users/userInfo", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("ltk")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    account: data
                });
            });
    }

    componentDidUpdate() {
        fetch("https://bankbergfinanceapi.herokuapp.com/api/users/userInfo", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "x-access-token": sessionStorage.getItem("ltk")
            }
        })
            .then((res) => res.json())
            .then((data) => {
                if (this.props.success === "done") {
                    if (document.getElementById('loginbtn')) {
                        document.getElementById('loginbtn').innerText = "Proceed To Recharge"
                    }
                }
                this.setState({
                    account: data
                });
            });
    }

}


function mapStatetoProps(state) {
    console.log(state.Recharge);
    if (!state.Recharge) {
        return {
            err: "",
            succ: "",
            success: ""
        }
    } else {
        if (state.Recharge.error) {
            return {
                err: state.Recharge.error,
                succ: "", success: ""
            }
        } else {
            return { err: "", succ: state.Recharge.message, success: "done" }
        }
    }
}

Recharge.protoType = {
    dispatch: PropTypes.func
};

export default connect(mapStatetoProps)(Recharge);