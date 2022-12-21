import React from 'react'
import './Home.css'
const TopHome = () => {
  return (
    <div className='topImageContainer'>
    <img src={process.env.PUBLIC_URL + '/background.jpg'} alt="Logo" className='topImage' />
    <div className='topDescription'>
      <div className='topDescription1'>
        <h2>Createa</h2>
        <p>Animée tout au long de la journée , on s'y retrouve pour prendre un petit thé au lait ou un gatêau de la joie dans une salle tranquille à l'abri de l 'agitation de l'avenue </p>
      </div>
      <img src={process.env.PUBLIC_URL + '/assets/home/topDescription.bmp'} alt="Logo" />
    </div>
  </div>
  )
}

export default TopHome