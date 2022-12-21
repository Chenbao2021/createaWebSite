import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaInstagram } from "react-icons/fa";
import NavbarButton from './NavbarButton';
import { optionChanged } from '../../redux/navbar'
import BottomBar from '../bottomBar/BottomBar'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { commandeClicked } from '../../redux/commander';
import {SiDeliveroo, SiUbereats, SiFoodpanda, SiJusteat} from 'react-icons/si'

import "./Navbar.css"

const Navbar = () => {
    const dispatch = useDispatch();
  return (
    <div className='navbar'>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
        <div className='navbarRLContainer'>
            <div className='navbarRL'>
                    <NavbarButton Link='/' name='Accueil' />
                    <NavbarButton Link='/album' name='Galerie' />
                    <NavbarButton Link='/Menu' name='Menu' />
                    <NavbarButton Link='/Contact' name='Contact' />
                    <div    className='instagramNavbar' id='instagramNavbar'>
                        <a href='https://www.instagram.com/createa.fr/'>
                            <FaInstagram size={'100%'}/>
                        </a>
                        <a href='https://www.ubereats.com/fr/store/createa/rJSSt9DRRbuVf0NA3ZHIoA?diningMode=DELIVERY' className='icons'>
                            <SiDeliveroo  size={'80%'} />
                         </a>
                        <a href='https://www.ubereats.com/fr/store/createa/rJSSt9DRRbuVf0NA3ZHIoA?diningMode=DELIVERY' className='icons'>
                            <SiUbereats size={'80%'} />
                        </a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar