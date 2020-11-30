import React from "react";
import "./Footer.css";
import Facebook from "../icons/fb.svg";
import Instagram from "../icons/insta.svg";
import Youtube from "../icons/yt.svg";
import Tweeter from "../icons/twitt.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <h2 className="blndr-logo">Blndr.</h2>
      <div className="content-newsletter">
        <div className="newsletter">Newsletter</div>
        <div className="letter-mail">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="email"
          />
          <button type="button" className="button-newsletter">
            Subscribe!
          </button>
        </div>
      </div>
      <div className="social-net">
        <div className="logos-footer">
          <img className="logos-social" src={Facebook} alt="Facebook" />
        </div>
        <div className="logos-footer">
          <img className="logos-social" src={Tweeter} alt="Tweeter" />
        </div>
        <div className="logos-footer">
          <img className="logos-social" src={Instagram} alt="Instagram" />
        </div>
        <div className="logos-footer">
          <img className="logos-social" src={Youtube} alt="Youtube" />
        </div>
      </div>
      <div className="mention-legal">
        <div className="terms-conditions">Terms - Conditions</div>
        <div className="privacy-policy">Privacy Policy</div>
      </div>
    </div>
  );
}
