import React from 'react';
import Navbar from '@/components/navbar';
import styles from '@/styles/Home.module.css';

export default function Myhome() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
      </div>
    </div>
  );
}
