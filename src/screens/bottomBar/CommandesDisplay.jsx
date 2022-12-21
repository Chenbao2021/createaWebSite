import React from 'react'
import './bottomBar.css'
import {SiDeliveroo, SiUbereats, SiFoodpanda, SiJusteat} from 'react-icons/si'



const CommandesDisplay = () => {
  return (
    <div className='commandesDisplayContainer' >
        <div>
            <div className='commandesRow'>
                <a href='https://www.ubereats.com/fr/store/createa/rJSSt9DRRbuVf0NA3ZHIoA?diningMode=DELIVERY' className='icons'>
                    <SiDeliveroo  size={'80%'} />
                </a>
                <p>ou</p>
                <a href='https://www.ubereats.com/fr/store/createa/rJSSt9DRRbuVf0NA3ZHIoA?diningMode=DELIVERY' className='icons'>
                    <SiUbereats size={'80%'} />
                </a>
            </div>
        </div>
        <div className='commandesRow'>
            <p>Mais vous pouvez aussi commander via FoodPanda et AlorsFaim </p>
        </div>
    </div>
  )
}

export default CommandesDisplay