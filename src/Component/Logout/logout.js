import React from 'react'
import {logoutUser} from '../../Action/authActions'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "../Layout/homeNavBar"
import './logout.css'
import {Link} from 'react-router-dom'
import Animation from "../User/animation.gif"
import Thumb from "./thumb.jpg"


class Logout extends React.Component{
    constructor(){
        super()

        this.state={}
    }

    renderLogout = () => {
            return(
                <>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={Thumb} alt="thumb" className="thumb"/>
                    </div>
                    <div className="col-md-6 logout">
                      <center><h3>ThankYou For Using Our Services</h3></center>
                      <center><img src={Animation}  alt="animation" height="200px" width="250px"style={{margin: "10px 0"}}/></center>
                        <center> You Have Successfully Logged Out</center>
                        <center><Link to="/login" className="navlink">Click Here to Login Again</Link></center>
                        
                    </div>
                  </div>
                </div>
                </>
            )
    }
    render(){
        return(
            <>
            <Navbar/>
            {this.renderLogout()}
            </>
        )
    }

    componentDidMount(){
        this.props.dispatch(logoutUser());
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

Logout.protoType = {
    dispatch: PropTypes.func
  };

export default connect(mapStatetoProps)(Logout);