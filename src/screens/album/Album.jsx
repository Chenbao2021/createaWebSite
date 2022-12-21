import React from 'react'
import './album.css'
import Product from './Product'

const Album = () => {
    const teas = [ 
        {
            teaName:'Bown sugar_1', 
        },
        {
            teaName:'FB OREO',
        },
        {
            teaName:'FB pasteque',
        },
        {
            teaName:'fb PECHE ABRICOT', 
        },
        {
            teaName:'fb raisin',
        },
        {
            teaName:'FB uji matcha',
        },
        {
            teaName:'FP ananas', 
        },
        {
            teaName:'FP MANGUE',
        },
        {
            teaName:'Frappe fraise',
        },
        {
            teaName:'taro au lait frais', 
        },
        {
            teaName:'the cafe au lait', 
        },
        {
            teaName:'The jasmin au citron', 
        },
        {
            teaName:'The jasmin au lait frais', 
        },
        {
            teaName:'the noir au lait frais', 
        },
        {
            teaName:'the vert au fruit de la passion', 
        },
        {
            teaName:'the vert jasmin au creme cheese', 
        },
        {
            teaName:'the vert jasmin au litchi', 
        },
        {
            teaName:'the vert jasmin de la  mangue', 
        },
        {
            teaName:'Uji matcha', 
        },
    ];
  return (
    <div className='albumContainer'>
        <p>Cliquer l'image pour zoomer</p>
        <div className='products'>
            {
                teas.map( (product) => (
                    <Product name={product.teaName} teaUrl = { `${product.teaName}.jpg`} />
                ))
            }
        </div>
    </div>
  )
}

export default Album