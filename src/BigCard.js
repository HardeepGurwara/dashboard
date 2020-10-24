import React from "react";
import "./BigCard.css";
function BigCard({ logo, number, increaseNumber }) {
  return (
    <div className="bigCard">
      <div className="bigCard__info">
        <img src={logo} alt="" />
        <p>@hardeep_s22</p>
      </div>
      <div className="bigCard__folowers">
        <h1>{number}</h1>
      </div>
    </div>
  );
}

export default BigCard;
