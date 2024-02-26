import React from 'react'
import Header from "../../components/Header/Header"
import Discover from '../../components/Discover/Discover'
import Recomended from '../../components/Recomended/Recomended'
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header/>
      <Discover/>
      <Recomended/>
    </div>
  )
}

export default Home