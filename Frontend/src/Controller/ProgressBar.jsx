import React, { useEffect, useState } from "react";
import "./ProgressBars.css";

const ProgressBars = ({ positive, neutral, negative }) => {
  return (
    <div className="progress-bars">
      <div className="progress-bar positive" style={{ width: `${positive}%` }}>
        Positive : {positive}
      </div>
      <div className="progress-bar neutral" style={{ width: `${neutral}%` }}>
        Neutral : {neutral}
      </div>
      <div className="progress-bar negative" style={{ width: `${negative}%` }}>
        Negative : {negative}
      </div>
    </div>
  );
};

export default ProgressBars;
