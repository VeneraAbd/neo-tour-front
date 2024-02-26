import React from 'react';
import styles from "./Header.module.css";
import arrow from "../../assets/arrow.svg";
import frame from "../../assets/frame.png";

const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.container1}>
            <h1 className={styles.header_h1}>Winter Vacation Trips</h1>
            <p className={styles.header_p}>Enjoy your winter vacations with warmth and amazing sightseeing on the mountains. Enjoy the best experience with us!</p>
            <button className={styles.header_btn}><p>Let's Go!</p> <img src={arrow} alt="arrow" className={styles.arrow_icon}/></button>
        </div>
        <div className={styles.container2}>
            <img src={frame} alt="a man with a computer in the mountains" />
        </div>
    </header>
  )
}

export default Header