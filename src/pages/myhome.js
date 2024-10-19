import React from 'react';

import styles from '@/styles/Home.module.css';


const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>Welcome to Redocx</h1>
        <p className={styles.subtitle}>Your trusted documentation assistant</p>
        <button className={styles.glowingBtn}>
      <span className={styles.glowingTxt}>
        RE<span className={styles.faultyLetter}>A</span>D
      </span>
    </button>
      </div>
      <div className={styles.imageSection}>
        <img
          src="/hero.png" // Replace with the actual image path
          alt="Hero Section"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default Hero;

