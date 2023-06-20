import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import photoGalleryData from "./myGallery.json";

import Skeleton from "@mui/material/Skeleton";

import classes from "./Gallery.module.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescribtion, setSelectedDescribtion] = useState("");

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  const handleImageClick = (image, describtion) => {
    setSelectedImage(image);
    setSelectedDescribtion(describtion);
  };

  const removeModalHandler = () => {
    setSelectedImage(null);
  };

  return (
    <div className={classes["photo-gallery"]} id="gallery">
      <h1>Photo Gallery</h1>
      <div className={classes["gallery"]}>
        {photoGalleryData.map((image, index) => (
          <img
            key={index}
            src={image.thumbnail}
            alt={`my gallery ${index + 1}`}
            onClick={() => handleImageClick(image.original, image.description)}
          />
        ))}
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={classes["overlay"]}
          onClick={removeModalHandler}
        >
          <motion.div
            className={classes["modal"]}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {selectedImage ? (
              <img alt={selectedDescribtion} src={selectedImage} />
            ) : (
              <Skeleton
                variant="rectangular"
                width={210}
                height={118}
                animation="wave"
              />
            )}

            <p className={classes["describtion"]}>{selectedDescribtion}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
