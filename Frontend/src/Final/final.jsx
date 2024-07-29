import React, { useState } from "react";
import "./final.css";
import ProgressBars from "../Controller/ProgressBar";
import axios from "axios";

export const Final = () => {
  const [formData, setFormData] = useState({
    username: "",
  });
  const [analysisData, setAnalysisData] = useState(null); // State to store analysis data

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let requestBody = {
      username: formData.username,
    };

    try {
      const response = await axios.get(
        "http://43.205.216.219:80/api/v1/fetch",
        requestBody
      );
      const data = response.data;
      setAnalysisData(data); // Update the analysis data state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const moodClasses = {
    positive: 'positive-mood',
    neutral: 'neutral-mood',
    negative: 'negative-mood',
  };
  
  const moodClassName = analysisData ? moodClasses[analysisData.Overall.toLowerCase()] : '';
  
  return (
    <div className="final-container">
      <div className="final-flex">
        <div className="final-textbox">
          <h1 className="final-head">Analysis</h1>
          <h3 className="final-body">
          Could you please provide me with your Reddit username? I am interested in conducting an analysis of your mental health based on your activity and interactions on the platform.
          </h3>
          <input
            type="text"
            id="username"
            name="username"
            className="final-input"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="final-submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <div><img className="final-logo" src="../../public/icon14.png" alt="logo"></img></div>
      </div>
      <div className="progress-container">
        {analysisData && <ProgressBars
              positive={analysisData.Positive}
              neutral={analysisData.Neutral}
              negative={analysisData.Negative}
          />} {/* Pass analysis data to the ProgressBars component */}
      </div>
      <div className="final-flex-suggest">
        <div className="final-overall">
        <h1>Overall Mood:<span className={`overall-mood ${moodClassName}`}>&nbsp;&nbsp;{analysisData ? analysisData.Overall : ""}</span></h1>       </div>
        <div>
          <h1 className="final-suggest">Suggestions</h1>
          <p className="final-stext">
            {analysisData ? (
              <>{analysisData.Suggestion}</>
                ) : (
                  "No suggestions available"
                )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Final;
