import React from 'react';
import styles from "./Recomended.module.css";
import mockData from '../Carousel/Carousel';
import Cards from '../Cards/Cards';

const Recomended = () => {

  return (
      <section className={styles.container}>
        <h1 className={styles.title}>Recommended</h1>
        <div className={styles.cardsContainer}>
          
            <Cards data={mockData} />
  
        </div>
      </section>
    
  )
}

export default Recomended