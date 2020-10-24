import React from "react";
import "./Header.css";
function Header({ followers }) {
  return (
    <div className="header">
      <div className="header__info">
        <div className="header__followers">
          <h2>Social Media dashboard</h2>
          <p>Total Followers: {followers} </p>
        </div>
        <div className="header__button">
          <p>dark mode</p>
          <button>veve</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
