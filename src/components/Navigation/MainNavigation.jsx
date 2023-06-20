import React from "react";
import classes from "./MainNavigation.module.css";
import { motion } from "framer-motion";
import IconLetterU from "../../theme/MyLogo";
import { Link } from "react-scroll";

function MainNavigation() {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <nav className={classes["nav-wrapper"]}>
      <div className={classes["container"]}>
        <IconLetterU onRefresh={refreshPage} />

        <motion.div
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 120,
            ease: "easeInOut",
          }}
        >
          <Link
            to="hobby"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes["nav__link"]}
          >
            Hobby
          </Link>

          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes["nav__link"]}
          >
            Gallerry
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes["nav__link"]}
          >
            Contact
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}

export default MainNavigation;
