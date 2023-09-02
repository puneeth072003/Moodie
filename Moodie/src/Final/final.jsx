import React from "react";
import "./final.css";
import ProgressBars from "../Controller/ProgressBar";
import axios from "axios";
import { useState } from "react";
import fs from "fs";

export const Final = () => {
  const [formData, setFormData] = useState({
    username: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Update the corresponding property with the new value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let requestBody = {
      username: formData.username,
    };

    await fetch("http://localhost:5000/api/v1/final", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody), // Send the username as JSON data
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("####", data);
        window.Positive = data.Positive;
        window.Negative = data.Negative;
        window.Neutral = data.Neutral;
        window.Overall = data.Overall;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="final-container">
      <div className="final-textbox">
        <h1 className="final-head">Analysis</h1>
        <h3 className="final-body">
          Please input your Reddit username so that I can analyse your mental
          health
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
        <button type="submit" className="final-submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="progress-container">
        <ProgressBars />
      </div>
      <div className="final-overall">
        <h1>Overall Mood: {window.Overall}</h1>
      </div>
      <div>
        <h1 className="final-suggest">Suggestions</h1>
        <p className="final-stext">
          I think you are a bit depressed, please talk to your close ones once
        </p>
      </div>
    </div>
  );
};
