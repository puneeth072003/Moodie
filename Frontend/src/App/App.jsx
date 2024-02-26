import "./App.css";
import icon14 from "../assets/icon14.png";
import ProgressBars from "../Controller/ProgressBar";
import { Final } from "../Final/final";
import bg from "./bg.mp4"
import { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Support } from "../Support bar/Support";

function App() {
  useEffect(() => {
    const video = document.querySelector('.video-container video');
    video.playbackRate = 0.7;
  }, []);
  return (
    <>
    <Navbar/>
     <div className="app-overlay">
        <div className="app-container">
          <div className="text-container">
            <img src={icon14} className="app-logo"></img>
            <h1 className="app-head">Hi There!!</h1>
            <p className="app-text">
              I'm Moodie, the groundbreaking sentiment analysis app, designed to
              effortlessly decipher emotions and sentiments hidden within text.
              I'm here to be your invaluable companion, serving both businesses
              and individuals alike, providing a profound understanding of the
              emotions expressed in text.
            </p>
          </div>
          <div className="video-container">
            <video src={bg} autoPlay loop muted className="main-logo"></video>
          </div>
        </div>
      </div>
      <div className="app-finalcontainer">
        <Final />
      </div>
      <Support />
    </>
  );
}

export default App;
