// icon:letter-u | Tabler Icons https://tablericons.com/ | Csaba Kissi
import { motion } from "framer-motion";
import * as React from "react";

const svgVariant = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariant = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
function IconLetterU({ onRefresh }) {
  return (
    <motion.svg
      variants={svgVariant}
      initial="hidden"
      animate="visible"
      fill="none"
      stroke="#F582A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.5}
      viewBox="0 0 24 24"
      height="2.5em"
      width="2.5em"
      style={{ cursor: "pointer" }}
      onClick={onRefresh}
      // style={{ filter: " drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))" }}
    >
      <motion.path stroke="none" d="M0 0h24v24H0z" variants={pathVariant} />
      <motion.path
        d="M17 8a4 4 0 00-4-4h-2a4 4 0 000 8h2a4 4 0 010 8h-2a4 4 0 01-4-4"
        variants={pathVariant}
      />
    </motion.svg>
  );
}

export default IconLetterU;
