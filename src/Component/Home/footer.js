import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "yellow", marginTop: "50px" }}
      id="contact"
    >
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-4 homefootercol">
              <center>
                <h3>Contact</h3>
                <h6>Bank Berg Finance</h6>
                <h6>Hansda Road, Gulabbgh</h6>
                <h6>Purnea, Bihar - 854326</h6>
              </center>
            </div>
            <div className="col-md-4 homefootercol">
              <center>
                <h6>+91 1234567896</h6>
                <h6>
                  <a
                    href="mailto:nishantbihar529@gmail.com"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    nishantbihar529@gmail.com
                  </a>
                </h6>
                <h6>Our Social Links:</h6>
                <div>
                  <a
                    href="https://www.facebook.com/nishantlikesaccess/"
                    className="sociallinks"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
                      alt="facebook"
                      width="22"
                      height="22"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/the_nishant_singh"
                    className="sociallinks"
                  >
                    <img
                      src="https://pbs.twimg.com/profile_images/1306051401236099072/nuSA8oqW.jpg"
                      alt="insta"
                      width="22"
                      height="22"
                    />
                  </a>
                  <a
                    href="https://twitter.com/the_nishant_s"
                    className="sociallinks"
                  >
                    <img
                      src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
                      alt="twitter"
                      width="22"
                      height="22"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nishant-singh-50771216b/"
                    className="sociallinks"
                  >
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/linkedin-208-916919.png"
                      alt="twitter"
                      width="22"
                      height="22"
                    />
                  </a>
                </div>
              </center>
            </div>
            <div className="col-md-4 homefootercol">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Subscribe to our newsletter"
                style={{ backgroundColor: "black", color: "white" }}
              />
              <center>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  Subscribe
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
      <center>
        <p style={{ padding: "10px" }}>© Copyright 2021, All Rights Reserved</p>
      </center>
    </footer>
  );
};

export default Footer;
