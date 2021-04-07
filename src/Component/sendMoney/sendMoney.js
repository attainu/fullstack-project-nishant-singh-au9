import React from "react";
import "./sendMoney.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashNav from "../Layout/dashNav";
import { sendMoneyAction } from "../../Action/sendMoneyAction"
import Loader from "../../loader.svg";

class SendMoney extends React.Component {
    constructor() {
        super();

        this.state = {
            amount: "",
            receipnt: "",
            transactionPassword: "",
            account: "",
            err: ""
        };
    }

    submitHandler = () => {
        let { amount, receipnt, transactionPassword } = this.state;
        if (!amount || !receipnt || !transactionPassword) {
            this.setState({
                err: "Please Fill Every Feild"
            })
        } else {
            document.getElementById('loginbtn').innerText = "Sending Money Please Wait"
            let amt = {
                amount: parseInt(this.state.amount),
                account: this.state.receipnt,
                transactionPassword: this.state.transactionPassword
            }
            console.log()
            this.props.dispatch(sendMoneyAction(amt))
        }
    }

    amountchangeHndler = (event) => {
        this.setState({
            err: "",
            amount: event.target.value
        });
    };
    receipntchangeHndler = (event) => {
        this.setState({
            err: "",
            receipnt: event.target.value
        });
    };
    transactionPasswordchangeHndler = (event) => {
        this.setState({
            err: "",
            transactionPassword: event.target.value
        });
    };

    rendersendmoney = () => {
        if (sessionStorage.getItem("ltk")) {
            if (this.state.account) {
                return (
                    <>
                        <div className="loginform">
                            <div className="card" id="logincard">
                                <center>
                                    <h2>Send Money</h2>
                                </center>
                                <div className="form-group">
                                    <h4>Hi {this.state.account.name},</h4>
                                    <span>Current Balance: ₹{this.state.account.balance}/-</span>
                                    <p>Money will be debited from Account: {this.state.account.account}</p>
                                    <center>
                                        <p style={{ color: "red", fontWeight: "bold" }}>{this.props.err}</p>
                                        <p style={{ color: "red", fontWeight: "bold" }}>{this.state.err}</p>
                                        <p style={{ color: "green", fontWeight: "bold" }}>{this.props.succ}</p>
                                    </center>
                                    <label for="exampleInputPassword1"><b>Amount:</b></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Amount"
                                        onChange={this.amountchangeHndler}
                                        value={this.state.amount}
                                    />

                                    <label for="exampleInputPassword1"><b>Recepient Account Number:</b></label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Account Number"
                                        onChange={this.receipntchangeHndler}
                                        value={this.state.receipnt}
                                    />

                                    <label for="exampleInputPassword1"><b>Transaction Password:</b></label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter Transaction Password"
                                        onChange={this.transactionPasswordchangeHndler}
                                        value={this.state.transactionPassword}
                                    />
                                </div>
                                <button
                                    className="btn btn-danger"
                                    id="loginbtn"
                                    onClick={this.submitHandler}
                                >
                                    Send Money
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
    };

    render() {
        return (
            <>
                <DashNav />
                {this.rendersendmoney()}
            </>
        );
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
                if (this.props.success = "done") {
                    if (document.getElementById('loginbtn')) {
                        document.getElementById('loginbtn').innerText = "Send Money"
                    }
                }
                this.setState({
                    account: data
                });
            });
    }
}

function mapStatetoProps(state) {
    if (!state.SendMoney) {
        return {
            err: "",
            succ: "",
            success: ""
        }
    } else {
        if (state.SendMoney.error) {
            return {
                err: state.SendMoney.error,
                succ: "", success: ""
            }
        } else {
            return { err: "", succ: state.SendMoney.message, success: "done" }
        }
    }
}

SendMoney.protoType = {
    dispatch: PropTypes.func,
};

export default connect(mapStatetoProps)(SendMoney);
