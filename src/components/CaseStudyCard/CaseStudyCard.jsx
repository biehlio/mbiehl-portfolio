/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { DetailLine } from "../DetailLine";
import "./style.css";

export const CaseStudyCard = ({ className, imageClassName }) => {
  return (
    <div className={`case-study-card ${className}`}>
      <div className={`div ${imageClassName}`} />
      <img
        className="line-2"
        alt="Line"
        src="https://cdn.animaapp.com/projects/652304fcedfff75bb0312a0c/releases/6524d67318323c3299a77de1/img/line-1.svg"
      />
      <div className="data-2">
        <div className="case-study-wrapper">
          <div className="case-study">CASE STUDY</div>
        </div>
        <div className="bottom-section">
          <div className="text-wrapper-2">Standards Aligned Reporting System</div>
          <div className="details">
            <DetailLine className="detail-line-instance" content="Get More Math" type="WHO" />
            <DetailLine
              className="detail-line-instance"
              content="A report to show student proficiency per state standard"
              type="WHAT"
            />
            <DetailLine className="detail-line-instance" content="Increased sales and user engagement" type="RESULT" />
          </div>
        </div>
      </div>
    </div>
  );
};
