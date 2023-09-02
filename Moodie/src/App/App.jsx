import "./App.css";
import icon14 from "../assets/icon14.png";
import ProgressBars from "../Controller/ProgressBar";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="text-container">
          <h1 className="app-head">Hi There!!</h1>
          <p className="app-text">
            I'm Moodie, the groundbreaking sentiment analysis app, designed to
            effortlessly decipher emotions and sentiments hidden within text.
            I'm here to be your invaluable companion, serving both businesses
            and individuals alike, providing a profound understanding of the
            emotions expressed in text.
          </p>
        </div>
        <div className="img-container">
          <img src={icon14} alt="image" className="main-logo"></img>
        </div>
      </div>
      <div>
        <ProgressBars />
      </div>
    </>
  );
}

export default App;
