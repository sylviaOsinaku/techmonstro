import React from "react";
import classes from "./Intro.module.css";
import myProfile from "../../assets/myprofile.jpg";

function Intro() {
  return (
    <header className={classes["intro-wrapper"]}>
      <div>
        <h1>Hi, I'm Sylvia Osinaku</h1>
        <div>
          <p>
            I'm a frontend developer with a passion for creativity and
            problem-solving.
          </p>
          <p>
            Welcome to my{" "}
            <span className={classes["hubportfolio"]}> HubPortfolio</span>,
            where I showcase my skills and interests.
          </p>
          <p> Explore the different sections below to learn more about me.</p>
        </div>
      </div>

      <img
        src={myProfile}
        alt="My profile "
        className={classes["my-profile-image"]}
      />
    </header>
  );
}

export default Intro;
