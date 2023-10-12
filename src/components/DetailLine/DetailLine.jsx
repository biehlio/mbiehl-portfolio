/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const DetailLine = ({ content = "Get More Math", type = "who", className }) => {
  return (
    <div className={`detail-line ${className}`}>
      <div className="type">
        <div className="who">{type}</div>
      </div>
      <div className="get-more-math">{content}</div>
    </div>
  );
};

DetailLine.propTypes = {
  content: PropTypes.string,
  type: PropTypes.string,
};
