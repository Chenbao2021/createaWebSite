import React from 'react'
import './Menu.css'

const Menu = () => {
  return (
    <div>
      <div className='menuDownloadContainer'>
        <a href={process.env.PUBLIC_URL + '/assets/menu/menu.pdf'} download="menu.pdf">Clicker ici pour telecharger le menu</a>  
      </div>
      <div className='menuDisplayContainer'>
        <img src={process.env.PUBLIC_URL + '/assets/menu/menu.jpg'} alt="menu"></img>
      </div>
    </div>
  )
}

export default Menu