import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h3 className="contact">Contact us</h3>
        <div className="footer-icons">
          <a href="mailto:pyd773@gmail.com" className="footer-icon">
            <i className="fa-solid fa-envelope"></i>
            <span className="message">Mail</span>
          </a>
          <a
            href="https://github.com/puneeth072003/hackton-2k23"
            className="footer-icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://github.com/puneeth072003/hackton-2k23/issues/new"
            className="footer-icon"
          >
            <i className="fa-solid fa-bug"></i>
          </a>
        </div>
        <p className="final">
          Moodie.v1 @2023
          <br />
          Developed by Team Dev-Den
        </p>
      </div>
    </div>
  );
};

export { Contact };
