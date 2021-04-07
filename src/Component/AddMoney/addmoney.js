import React from "react";
import "./addmoney.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashNav from "../Layout/dashNav";
import { addMoneyAction } from "../../Action/addMoneyAction"
import Loader from "../../loader.svg";

class AddMoney extends React.Component {
    constructor() {
        super();

        this.state = {
            amount: 1000,
            account: ""
        };
    }

    submitHandler = () => {
        document.getElementById('loginbtn').innerText = "Adding Money Please Wait"
        let amt = {
            amount: parseInt(this.state.amount)
        }
        console.log()
        this.props.dispatch(addMoneyAction(amt))
    }

    amountchangeHndler = (event) => {
        this.setState({
            amount: event.target.value
        });
    };

    renderaddmoney = () => {
        if (sessionStorage.getItem("ltk")) {
            if (this.props.success === "") {
                if (this.state.account) {
                    return (
                        <>
                            <div className="loginform">
                                <div className="card" id="logincard">
                                    <center>
                                        <h2>Add Money</h2>
                                    </center>
                                    <div className="form-group">
                                        <h4>Hi {this.state.account.name},</h4>
                                        <span>Current Balance: ₹{this.state.account.balance}/-</span>
                                        <p>Money will be added to Account: {this.state.account.account}</p>
                                        <label for="exampleInputPassword1">Amount:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="Enter Amount"
                                            onChange={this.amountchangeHndler}
                                            value={this.state.amount}
                                        />
                                    </div>
                                    <button
                                        className="btn btn-danger"
                                        id="loginbtn"
                                        onClick={this.submitHandler}
                                    >
                                        Add Money
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
                this.props.history.push("/dashboard");
            }
        } else {
            this.props.history.push("/login");
        }
    };

    render() {
        return (
            <>
                <DashNav />
                {this.renderaddmoney()}
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
}

function mapStatetoProps(state) {
    if (!state.AddMoney) {
        return {
            success: ""
        }
    } else {
        success: "Money Added"
    }
}

AddMoney.protoType = {
    dispatch: PropTypes.func,
};

export default connect(mapStatetoProps)(AddMoney);
