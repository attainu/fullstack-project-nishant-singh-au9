import React, { Component } from "react";
import DashNav from "../Layout/dashNav";
import "./dashboard.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { snapShotUser } from "../../Action/snapAction";
import Greet from "../Greet/greet";
import Offers from "../Offers/offers"
import Loader from "../../loader.svg";
import Trans from "./trans"

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  renderDashboard = () => {
    if (sessionStorage.getItem("ltk")) {
      if (this.props.data) {
        return (
          <>
            <div className="container">
              <div className="row">
                {Greet(this.props.data.name)}
                <div className="col dashcol">
                  <h5>Account Number - {this.props.data.account}</h5>
                  <p>Current Balance - <b>₹{this.props.data.balance}/-</b></p>
                  <Trans trans={this.props.data.Transactions.reverse()}/>
                </div>
                <Offers/>
              </div>
            </div>
          </>
        );
      } else {
        return(
          <>
          <center><img src={Loader} alt="loader"/></center>
          </>
        )
      }
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    console.log("props", this.props);
    return (
      <>
        <DashNav />
        {this.renderDashboard()}
      </>
    );
  }

  componentDidMount() {
    this.props.dispatch(snapShotUser());
  }
}

function mapStatetoProps(state) {
  console.log(state);
  if (!state.Snap) {
    return {
      data: "",
      err: ""
    };
  } else {
    if (state.Snap.error) {
      return {
        data: "",
        err: "Something Went Wrong"
      };
    } else {
      return {
        data: state.Snap,
        err: ""
      };
    }
  }
}

Dashboard.protoType = {
  dispatch: PropTypes.func
};

export default connect(mapStatetoProps)(Dashboard);
