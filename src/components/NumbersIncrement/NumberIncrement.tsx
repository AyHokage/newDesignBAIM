import styles from './NumberIncrement.module.css';
import React, { useEffect, useState } from 'react';
import { Nunito } from "next/font/google";

const nunito = Nunito({subsets: ["latin"]});

interface Props {
  title: string,
  num: number
}

const NumberIncrement = ({title, num}: Props) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!showAnimation) {
            startIncrementAnimation(num);
            setShowAnimation(true);
          }
        } else {
          if (showAnimation) {
            setShowAnimation(false);
            setNumber(0);
          }
        }
      });
    }, options);

    const numberElement = document.getElementById('nbr');
    if (numberElement) {
      observer.observe(numberElement);
    }

    return () => {
      if (numberElement) {
        observer.unobserve(numberElement);
      }
    };
  }, [showAnimation, num]);

  const startIncrementAnimation = (endNumber: number, speed = 10) => {
    setNumber(0);

    const incNbrRec = (currentNumber: number) => {
      if (currentNumber <= endNumber) {
        setNumber(currentNumber);
        setTimeout(() => { 
          incNbrRec(currentNumber + 1);
        }, speed);
      }
    };

    incNbrRec(0);
  };

  return (
    <div className={`${styles.numberIncrement} ${nunito.className} ${showAnimation ? styles.animate : ''}`}>
      <div className={styles.circle} id="nbr"><p>{number}</p></div>
      <p className={styles.circleTitle}>{title}</p>
    </div> 
  );
};

export default NumberIncrement;
