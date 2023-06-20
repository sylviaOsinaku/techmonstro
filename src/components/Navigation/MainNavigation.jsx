import React, { useState } from "react";
import classes from "./MainNavigation.module.css";
import { motion } from "framer-motion";
import IconLetterU from "../../theme/MyLogo";
import { Link } from "react-scroll";

function MainNavigation() {
  const [showNav, setShowNav] = useState(null);
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <nav className={classes["nav-wrapper"]}>
      <div className={classes["container"]}>
        <IconLetterU onRefresh={refreshPage} />

        <motion.div
          initial={!showNav ? { y: -250 } : { opacity: 0 }}
          animate={!showNav ? { y: 0 } : { opacity: 1 }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
            stiffness: 120,
            ease: "easeInOut",
          }}
        >
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
            to="hobby"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className={classes["nav__link"]}
          >
            Hubby
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
