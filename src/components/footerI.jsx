import React from "react";
import image15 from "../images/image15.webp";
import "../styles/footerI.css";

const FooterI = () => {
  return (
    <>
      <div
        className="footerI"
        style={{ backgroundImage: `url(${image15})` }}
      >
        <div className="footerContainer">
          <p id="footer">Get started now</p>
          <p id="id">for as little as $7.99 per serving</p>
          <button style={{textAlign: "center"}}>see plans</button>
        </div>
      </div>
    </>
  );
};

export default FooterI;
