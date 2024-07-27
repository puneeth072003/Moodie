import React, { useEffect, useState } from "react";
import "./ProgressBars.css";

const ProgressBars = ({ positive, neutral, negative }) => {
  return (
    <div className="progress-bars">
      <div className="progress-bar positive" style={{ width: `${positive}%` }}>
        Positive
      </div>
      <div className="progress-bar neutral" style={{ width: `${neutral}%` }}>
        Neutral
      </div>
      <div className="progress-bar negative" style={{ width: `${negative}%` }}>
        Negative
      </div>
    </div>
  );
};

export default ProgressBars;
