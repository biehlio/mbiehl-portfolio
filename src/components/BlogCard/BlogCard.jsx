/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BlogCard = ({
  className,
  imageClassName,
  text = "Implementing a continuous discovery strategy",
  line = "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1.svg",
}) => {
  return (
    <div className={`blog-card ${className}`}>
      <div className={`image ${imageClassName}`} />
      <img className="img" alt="Line" src={line} />
      <div className="data">
        <div className="subject">
          <div className="text-wrapper">UX STRATEGY</div>
        </div>
        <p className="implementing-a">{text}</p>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  text: PropTypes.string,
  line: PropTypes.string,
};
