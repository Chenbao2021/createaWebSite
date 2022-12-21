import React from 'react'
import { useState } from 'react';
import { IoStar } from "react-icons/io5";
import './index.css'
const Etoile = () => {
    const [vertical, setVertical] = useState(Math.trunc( Math.random()*100));
    setTimeout(()=>{
        setVertical( Math.trunc( Math.random()*100 ) );
    }, 3 * 1000);
  return (
    <div 
        className='etoileContainer'
        ref={el => {
            if (!el) return;
            console.log(el.getBoundingClientRect()); 
        }}
    >
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'green'}/>
        </span>
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'white'}/>
        </span>
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'blue'}/>
        </span>
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'yellow'}/>
        </span>
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'violet'}/>
        </span>
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'red'}/>
        </span>
        <span className='etoiles' style={{
            position: 'absolute', 
            overflow: 'hidden', 
            bottom: Math.trunc( Math.random()*100 ) + '%',
            left: Math.trunc( Math.random()*100 ) + '%'
            }}
        >
            <IoStar size = {'2vw'} color={'grey'}/>
        </span>
    </div>
  )
}

export default Etoile