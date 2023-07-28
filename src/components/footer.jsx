import React from "react";
import "./footer.css";
// import fb from '../assets/facebook_icon.jpg';
// import twitter from '../assets/twitter_icon.png';
// import linkedin from '../assets/linkedin_icon.png';
// import insta from '../assets/insta_icon.avif';
import cmb from "../assets/combo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Business</h4>
            <a href="/menu">
              <p>On The Menu</p>
            </a>
            <a href="/pricing">
              <p>Pricing</p>
            </a>
            <a href="/vision">
              <p>Our Vision</p>
            </a>
            <a href="/wine">
              <p>Wine</p>
            </a>
            <a href="/market">
              <p>Market</p>
            </a>
            <a href="/gift">
              <p>Gift Cards</p>
            </a>
            <a href="/blog">
              <p>Blog</p>
            </a>
            <a href="/cookbook">
              <p>Cookbook</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/suppliers">
              <p>Suppliers</p>
            </a>
            <a href="/affiliates">
              <p>Affiliates</p>
            </a>
            <a href="/supply">
              <p>Supply Chains Act</p>
            </a>
            <a href="/foodsafety">
              <p>Food Safety</p>
            </a>
            <a href="/carrers">
              <p>Carrers</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/team">
              <p>Our Team</p>
            </a>
            <a href="/relations">
              <p>Investor Relations</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Services</h4>
            <a href="/military">
              <p>Military & Veterans</p>
            </a>
            <a href="/students">
              <p>Students</p>
            </a>
            <a href="/teachers">
              <p>Teachers</p>
            </a>
            <a href="/seniors">
              <p>Seniors (+55)</p>
            </a>
            <a href="/medicalstaff">
              <p>Medical Staff</p>
            </a>
            <a href="/firstresponders">
              <p>First Responders</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Customer Support</h4>
            <a href="/helpcenter">
              <p>Help Center & FAQ</p>
            </a>
            <a href="/contact">
              <p>contact@blueeapron.com</p>
            </a>
            <a href="/phone">
              <p>(646) 891-4349</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>&#169; Blue Apron, LLC 2023</h4>
            <a href="/don'tsell">
              <p> Do Not Sell or Share My Info</p>
            </a>
            <a href="/notice">
              <p>Notice to India</p>
            </a>
            <a href="/residents">
              <p>Residents</p>
            </a>
            <a href="/adpreferences">
              <p>Ad Preferences</p>
            </a>
            <div className="socialmedia">
              {/* <p><img src={fb} alt="err"/></p>
                    <p><img src={twitter} alt="err"/></p>
                    <p><img src={linkedin} alt="err"/></p>
                    <p><img src={insta} alt="err"/></p> */}
              <p>
                <img src={cmb} alt="err" />
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              @{new Date().getFullYear()} www.blueapron.com | All right
              reserved.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Call 1-844-462-8299 for assistance.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
