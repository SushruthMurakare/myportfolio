import React, { useState, useEffect } from 'react';
import Button from "../Button";
import styles from './socials.module.css';

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const [shakingIndex, setShakingIndex] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * yourData.socials.length);
      setShakingIndex(randomIndex);
      setTimeout(() => setShakingIndex(null), 500);
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button
          key={index}
          onClick={() => window.open(social.link)}
          className={index === shakingIndex ? styles['tilt-shaking'] : ''}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
