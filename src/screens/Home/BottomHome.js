import React from 'react'

const bottomHome = () => {
  return (
    <div className='bottomHomeContainer'>
      <img src={process.env.PUBLIC_URL + '/assets/home/commentaireInstagram.bmp'} alt="Logo" className='bottomCommentaire' />
      <img src={process.env.PUBLIC_URL + '/assets/home/welcome.jpg'} alt="Logo" className='bottomImage' />
    </div>
  )
}

export default bottomHome