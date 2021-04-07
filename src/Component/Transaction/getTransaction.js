import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import DashNav from "../Layout/dashNav";
import { getTransaction } from "../../Action/transactionAction"
import "./transaction.css"
import Loader from "../../loader.svg";

class Transaction extends React.Component {
    constructor() {
        super();
        this.state={
            from : "",
            to: "",
            err: ""
        }
    }

    fromChangeHandler = (e) => {
        this.setState({from: e.target.value, err: ""})
    }

    toChangeHandler = (e) => {
        this.setState({to: e.target.value, err: ""})
    }

    transactionTable = () => {
        return this.props.transactions.map((item) => {
            return(
                <>
                <tr>
                    <th>{item.date.slice(0,10)}</th>
                    <th>{item.about}</th>
                    <th>{item.amount}</th>
                    <th>{item.type}</th>
                    <th>{item.curBalance}</th>
                </tr>
                </>
            )
        })
    }


    applyHandler = () => {
        const {from, to} = this.state
        let date = {
            from, to
        }
        console.log("data>>>>>>>>>>>>>>>>>",date)
        if(!from || !to) {
            this.setState({err: "Please Select All Fields"})
        }else{
            this.props.dispatch(getTransaction(date))
        }
    }

    renderTransaction = () => {
        if (sessionStorage.getItem('ltk')) {
            if (this.props.transactions) {
                return (
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="trans1">
                                        <p style={{color:"black", fontWeight:"bold"}}>Select a date range to get the statements</p>
                                        <p style={{color:"red", fontWeight:"bold"}}>{this.state.err}</p>
                                        <label style={{marginTop: "10px", display:"block", fontWeight:"bold"}}>From</label>
                                        <input type="date" onChange={this.fromChangeHandler} value={this.state.from}/>
                                        <label style={{marginTop: "10px", display:"block", fontWeight:"bold"}}>To</label>
                                        <input type="date" onChange={this.toChangeHandler} value={this.state.to}/>
                                        <button className="btn btn-primary" style={{marginTop: "10px", display:"block"}} onClick={() => this.applyHandler()}>Apply</button>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="table-responsive trans2">
                                        <table class="table table-bordered" id="myTable">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Remarks</th>
                                                    <th scope="col">Amount</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.transactionTable()}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            } else {
                return(
                    <>
                    <center><img src={Loader} alt="loader"/></center>
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
                {this.renderTransaction()}
            </>
        )
    }
    componentDidMount() {
        this.props.dispatch(getTransaction())
    }
}

function mapStatetoProps(state) {
    if (!state.Transaction) {
        return {
            transactions: ""
        }
    } else {
        return {
            transactions: state.Transaction.reverse()
        }
    }
}

Transaction.protoType = {
    dispatch: PropTypes.func,
};

export default connect(mapStatetoProps)(Transaction);