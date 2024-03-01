import React from 'react';
import styles from "./Recomended.module.css";
import Cards from '../Cards/Cards';
import mockData from "../Carousel/Carousel"; 
import { useState } from 'react';
import Carousel from '../Carousel/Carousel.jsx';

const Recomended = () => {
    
  return (
      <section className={styles.container}>
        <h1 className={styles.title}>Recommended</h1>
        <div className={styles.cardsContainer}>
          
          <Carousel />
        </div>
      </section>
    
  )
}

export default Recomended