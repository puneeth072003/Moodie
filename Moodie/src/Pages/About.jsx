import React from "react";
import "./About.css";
import abdul from "./assests/abdul.jpg";
import teja from "./assests/teja.jpg";
import punee2 from "./assests/punee2.jpg";
import abhi from "./assests/abhi.jpg";
import logowhite from "../assets/logowhite.png";

export const About = () => {
  return (
    <div>
      <section className="abt_content">
        <div className="abt_about-text">
          <h2 className="abt-head">Our Story</h2>
          <p>
            Meet our dedicated team of professionals who are passionate about
            delivering excellence. Together, we bring diverse expertise and
            creativity to drive innovation and achieve our shared goals.
          </p>
        </div>

        <div className="abt_team">
          <h2>Our Team</h2>
          <div className="abt_team-member">
            <img className="size" src={punee2} />
            <h3>Puneeth Y</h3>
            <p>Founder and CEO</p>
          </div>
          <div className="abt_team-member">
            <img className="size" src={abhi} />
            <h3>Abhishek B</h3>
            <p>COO</p>
          </div>
          <div className="abt_team-member">
            <img className="size" src={abdul} />
            <h3>Abdul Rahman</h3>
            <p>COO</p>
          </div>
          <div className="abt_team-member">
            <img className="size" src={teja} />
            <h3>Tejaswa D</h3>
            <p>COO</p>
          </div>
        </div>
        <br />
        <center>
          <img src={logowhite} alt="" width="250px" />
        </center>
      </section>
    </div>
  );
};
