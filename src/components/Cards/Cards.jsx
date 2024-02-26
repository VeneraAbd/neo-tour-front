import React from 'react';
import styles from "./Cards.module.css";


const Cards = () => {
  return (

      <div className={styles.cardContainer}>
        <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80" alt="Nature" />
        <h3 className={styles.cardTitle}>
            Names of Places
        </h3>
      </div>

    
  )
}

export default Cards;