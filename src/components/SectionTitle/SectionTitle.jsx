/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const SectionTitle = ({
  title = "UX Strategy",
  className,
  UXStrategyClassName,
  line = "https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-2.svg",
}) => {
  return (
    <div className={`section-title ${className}`}>
      <div className={`UX-strategy ${UXStrategyClassName}`}>{title}</div>
      <img className="line" alt="Line" src={line} />
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  line: PropTypes.string,
};
