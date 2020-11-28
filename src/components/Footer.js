import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";
import { SVG } from "./SVG";

const HR = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 0.2,
    }}
  />
);
export const Footer = () => {
  return (
    <div className="footer">
      <SVG />
      <div className="content">
        <div className="Products">
          <h1>About</h1>
          <p>
            the world's largest alcohol marketplace and the best way to shop
            beer, wine and spirits. Our customers trust us to be part of their
            lives their celebrations, parties, dinners and quiet nights at home
          </p>
        </div>
        <div className="Favorites">
          <h1>Favorites</h1>
          <ul>
            <li>
              <Link to="/#">Wine</Link>
            </li>
            <li>
              <Link to="/#">Rum</Link>
            </li>
            <li>
              <Link to="/#">Whisky</Link>
            </li>
            <li>
              <Link to="/#">Vodka</Link>
            </li>
            <li>
              <Link to="/#">Champagne</Link>
            </li>
            <li>
              <Link to="/#">Schotch Whisky</Link>
            </li>
            <li>
              <Link to="/#">Brandy</Link>
            </li>
            <li>
              <Link to="/#">Beer</Link>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h1>Follow</h1>
          <ul>
            <li>
              <Link to="/#">
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </li>
            <li>
              <Link to="/#">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <HR color="rgb(89, 89, 89)" />
      <div id="footer">
        <h1>Newsletter</h1>
        <form>
          <input type="email" placeholder="Your Email Please...." />
          <br />
          <button className="btn">Subscribe</button>
          <br />
          <p>&copy; Web Store All Rights Reserved</p>
        </form>
      </div>
    </div>
  );
};
