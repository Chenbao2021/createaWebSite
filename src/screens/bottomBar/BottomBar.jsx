import React from 'react'
import './bottomBar.css'
import { FaInstagram } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai"
import {  useDispatch } from 'react-redux/es/exports';
import { commandeClicked } from '../../redux/commander';
const BottomBar = () => {
    const dispatch = useDispatch();
  return (
    <div className='bottomBarContainer'>
        <div    className='instagram'>
            <a href='https://www.instagram.com/createa.fr/'>
                <FaInstagram size={'100%'}/>
            </a>
        </div>
        <button  className='commandesContainer' onClick={() => {dispatch(commandeClicked())}}>
            <div className='commandesButton'>
                <AiOutlineShoppingCart size = {'100%'} />
            </div>
        </button>
    </div>
  )
}

export default BottomBar