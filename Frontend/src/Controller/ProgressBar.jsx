import React, { useEffect, useState } from "react";
import "./ProgressBars.css";

const ProgressBars = () => {
  const [positive, setPositive] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [negative, setNegative] = useState(0);

  useEffect(() => {
    setPositive(window.Positive);
    setNeutral(window.Neutral);
    setNegative(window.Negative);
  }, []);
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
