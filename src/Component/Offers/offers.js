import React from "react";
import "./offer.css";

const Offers = () => {
  return (
    <>
      <div style={{ color: "white", marginTop: "50px", fontSize: "25px", marginBottom: "10px" }}>
        Deals That Will <strong><em>Interest You</em></strong>
      </div>
      <div className="offercontainer">
        <div className="book" style={{ borderRadius: "5px" }}>
          <div className="info" style={{ borderRadius: "5px" }}>
            <center>
              <strong>Flat 10% Discount on Flipkart Big Billion Days</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Samsung 20+ major brands</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://i.gadgets360cdn.com/large/flipkart-sale_1537795025926.jpg"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px", borderRadius: "5px" }}
            />
          </div>
        </div>
        <div className="book" style={{ borderRadius: "5px" }}>
          <div className="info" style={{ borderRadius: "5px" }}>
            <center>
              <strong>Flat 10% Discount on Amaon Great Indian Sale</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Apple 20+ major brands</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://static.toiimg.com/photo/msid-71537156/71537156.jpg"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px", borderRadius: "5px" }}
            />
          </div>
        </div>

        <div className="book" style={{ borderRadius: "5px" }}>
          <div className="info" style={{ borderRadius: "5px" }}>
            <center>
              <strong>Flat 10% Discount on Samsung Mobiles</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Samsung.com</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://media-eng.dhakatribune.com/uploads/2020/10/photo-october-offer-1602498632004.jpg"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px", borderRadius: "5px" }}
            />
          </div>
        </div>


        <div className="book" style={{ borderRadius: "5px" }}>
          <div className="info" style={{ borderRadius: "5px" }}>
            <center>
              <strong>Extra 5% discound using Our Credit or Debit cards with 2% reward</strong>
              <h2>GRAB DEALS</h2>
              <p>Offers valid on Tata Cliq</p>
            </center>
          </div>
          <div className="image">
            <img
              src="https://img.freepik.com/free-vector/sale-banner-template-design_74379-121.jpg?size=626&ext=jpg&ga=GA1.2.1356500412.1616976000"
              alt="ime"
              height="200"
              width="300"
              style={{ marginTop: "-100px", borderRadius: "5px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
