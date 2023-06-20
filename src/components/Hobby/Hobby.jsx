import React from "react";

import classes from "./Hobby.module.css";
import sections from "./myHobby.json";
function Hobby() {
  return (
    <div className={classes["hobby_wrapper"]} id='hobby'>
      <h2>Skills, Hobby and Interests</h2>

      <div className={classes["container"]}>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className={classes["section-wrapper"]}
          >
            <h3 className={classes["section-title"]}>{section.title}</h3>
            <p className={classes["section-description"]}>
              {section.description}
            </p>
            <div className={classes["section-items"]}>
              {section.items?.map((item, index) => (
                <div key={index} className={classes["section-item"]}>
                  {<li className={classes["item-name"]}>{item.name}</li>}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Hobby;
