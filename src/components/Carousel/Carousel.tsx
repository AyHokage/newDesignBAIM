import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft as caretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight as caretRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = ({ images }: any) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }; 

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [images]);

  return (
    <div className={styles.carouselImages}>
      <button className={styles.arrow} onClick={prevSlide}>
        <FontAwesomeIcon
          style={{ fontSize: "1rem" }}
          className="fa-solid fa-caret-left"
          icon={caretLeft} 
        />
      </button>
      <div className={styles.imgContainer}>
        <Image
          className={`${styles.carouselImage} ${styles.pc}`}
          width={500}
          height={300}
          alt={`Slide ${currentImageIndex + 1}`}
          loader={() => images[currentImageIndex][0]}
          src={images[currentImageIndex][0]}
        />
        <Image
          className={`${styles.carouselImage} ${styles.ipad}`}
          width={500}
          height={300}
          alt={`Slide ${currentImageIndex + 1}`}
          loader={() => images[currentImageIndex][1]}
          src={images[currentImageIndex][1]}
        />
         <Image
          className={`${styles.carouselImage} ${styles.phone}`}
          width={500}
          height={300}
          alt={`Slide ${currentImageIndex + 1}`}
          loader={() => images[currentImageIndex][2]}
          src={images[currentImageIndex][2]}
        />
      </div>
      <button className={styles.arrow} onClick={nextSlide}>
        <FontAwesomeIcon
          style={{ fontSize: "1rem" }}
          className="fa-solid fa-caret-right"
          icon={caretRight}
        />
      </button>
    </div>
  );
};

export default Carousel;
