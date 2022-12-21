import React from 'react'
import './Home.css'
import TopHome from './TopHome'
import BottomHome from './BottomHome'
const Home = () => {
  return (
    <div className='homeContainer' >
      <TopHome />
      <BottomHome />
    </div>
  )
}

export default Home