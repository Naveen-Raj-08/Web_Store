import React, { useState } from "react";

import Parallax from "../images/Banner.mp4";

export const VideoParallax = () => {
  return (
    <div className="parallax">
      <video autoPlay loop muted>
        <source src={Parallax} type="video/mp4" />
      </video>
      <h1>
        50% off
        <br />
        <span id="for">for first 10 Bookings</span>
        <br />
        <button className="btn">Book Now</button>
      </h1>
    </div>
  );
};
