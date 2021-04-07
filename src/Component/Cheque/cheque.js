import React from 'react';
import PropTypes, { string } from "prop-types";
import { connect } from "react-redux";
import DashNav from "../Layout/dashNav";
import Loader from "../../loader.svg";
import {chequeAction} from "../../Action/chequeAction"


class Cheque extends React.Component {
    constructor() {
        super()

        this.state = {
            data: ""
        }
    }

    submitHandler = () => {
        this.props.dispatch(chequeAction())
    }

    renderCheque = () => {
        if (this.state.data) {
            return (
                <>
                    <div className="loginform">
                        <div className="card" id="logincard">
                            <center>
                                <h2>Order Cheque</h2>
                                <p style={{ color: "red", fontWeight: "bold" }}>{this.props.err}</p>
                                <p style={{ color: "green", fontWeight: "bold" }}>{this.state.err}{this.props.succ}</p>
                            </center>
                            <h5>Address On which Cheque will be sent:</h5>
                            <p><span>Full Address: </span><span>{this.state.data.fulladdress},{this.state.data.city}, {this.state.data.state},{this.state.data.Country} - {this.state.data.pincode}</span></p>
                            <button className="btn btn-danger" onClick={this.submitHandler}>Order Cheque</button>
                        </div>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <center><img src={Loader} alt="loader" /></center>
                </>
            )
        }
    }

    render() {
        return (
            <>
                <DashNav />
                {this.renderCheque()}
            </>
        )
    }

    componentDidMount() {
        fetch("https://bankbergfinanceapi.herokuapp.com/api/transactions/getaddress", {
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
                    data
                });
            });
    }
}

function mapStatetoProps(state) {
    if(!state.Cheque){
        return{
            err: "", succ: ""
        }
    }else{
        if(state.Cheque.error){
            return{ err: state.Cheque.error, succ: ""}
        }else{
            return{err: "", succ: state.Cheque.message}
        }
    }
}

Cheque.protoType = {
    dispatch: PropTypes.func,
};
export default connect(mapStatetoProps)(Cheque);