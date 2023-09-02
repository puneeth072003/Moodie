import React from "react";
import Logowhite from "./asssets/logowhite.png";

const License = () => {
  return (
    <div className="container">
      <img
        src={Logowhite}
        alt="Sputilities-logo"
        className="support-logo"
      ></img>
      <div className="child-cont">
        <h3 className="license">Content License</h3>
        <p className="text">
          Unless otherwise stated, all content on this website is licensed under
          a <br />
          Creative Commons Attribution 4.0 International License
        </p>
      </div>
    </div>
  );
};

export { License };
