import React from 'react'
import DashNav from "../Layout/dashNav";
import { getDebitCard } from "../../Action/cardAction"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./debitcard.css"
import DebitTempelate from "./debittemplate"
import Loader from "../../loader.svg";

class DebitCard extends React.Component {

    renderDebitCard = () => {
        if (sessionStorage.getItem('ltk')) {
            if (this.props.debit) {
                return (
                    <>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 "><div className="debitcenter"><DebitTempelate data={this.props.debit} /></div></div>
                                <div className="col-md-6 debitoffers"><center><h4 style={{ paddingTop: "10px" }}>Current Offers On Our Debit Card</h4></center>
                                    <ul>
                                        <li>Flat 5% cashback on Amazon.in</li>
                                        <li>Flat 2% cashback on Movie Tickets and Food Order on Amazon.in</li>
                                        <li>Flat 2% cashback on Bill Payments and Recharges on Amazon.in</li>
                                        <li>Flat 2% cashback on Flight Bookings on Amazon.in</li>
                                        <li>Flat 1% cashback on all other spends</li>
                                    </ul>
                                </div>
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
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <>
                <DashNav />
                <center><h2 style={{ color: "white", marginBottom: "50px" }}>Debit Card Section</h2></center>
                {this.renderDebitCard()}
            </>
        )
    }

    componentDidMount() {
        this.props.dispatch(getDebitCard())
    }
}

function mapStatetoProps(state) {
    if (!state.DebitCard) {
        return {
            debit: ""
        }
    } else {
        return {
            debit: state.DebitCard[0]
        }
    }
}

DebitCard.protoType = {
    dispatch: PropTypes.func
};

export default connect(mapStatetoProps)(DebitCard);