import React from 'react'
import Header from "../../components/Header/Header"
import Discover from '../../components/Discover/Discover'
import Recomended from '../../components/Recomended/Recomended'

const Home = () => {
  return (
    <div>
      <Header/>
      <Discover/>
      <Recomended/>
    </div>
  )
}

export default Home