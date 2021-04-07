import React from "react";
import "./home.css";
import Logo from "../../logo.png";
import { Link } from "react-router-dom";

const DevPage = () => {
  return (
    <>
      <div className="conatiner">
        <div className="row">
          <div className="col-md-6 logodiv">
            <img className="img-fluid" src={Logo} alt="logo" />
          </div>
          <div className="col-md-6 stay">
            <div>
              <h1>Welcome</h1>
              <p>
                I am working hard to bring you a platform for all your banking
                needs, This is a MERN Stack project, and will be almost ready to
                use from next week.
              </p>
              <h5>nishantbihar529@gmail.com</h5>
              <p>
                Feedbacks and suggesations are always appreciated, ThankYou.
              </p>
              <h1>Stay Tuned</h1>
              <Link to="home">click me to go home</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DevPage;
