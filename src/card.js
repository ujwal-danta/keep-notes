import React from "react";
import { Link } from "react-router-dom";

const card = ({ year, message, href }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{year}</h3>
        </div>
        <div className="flip-card-back">
          <Link className="links" to={href}>
            {message}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default card;
