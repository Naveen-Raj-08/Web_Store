import React from "react";

export const HumbergerMenu = () => {
  return (
    <div className="menu-container">
      <input type="checkbox" className="toggler" />
      <div className="Humburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="menu">
        <div>
          <div>
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
