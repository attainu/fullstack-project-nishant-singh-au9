import React from "react";
import HomeNavBar from "../Layout/homeNavBar";
import "./home.css";
import Login from "../User/login";
import Footer from "./footer";
// import Bank from "./bank.jpg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  RenderHome = () => {
    if (sessionStorage.getItem("ltk")) {
      this.props.history.push("/dashboard");
    } else {
      return (
        <>
          <HomeNavBar />
          <section>
            <Login history={this.props.history} />
          </section>
          <Footer />
        </>
      );
    }
  };

  render() {
    return <div className="homediv">{this.RenderHome()}</div>;
  }
}
export default Home;
