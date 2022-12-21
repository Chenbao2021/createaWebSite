import React from 'react'
import PropTypes from 'prop-types'
import './album.css'

const Product = props => {
  return (
    <div className='productContainer'>
        <img src={process.env.PUBLIC_URL + '/assets/album/' + props.teaUrl} alt="Logo" />
        <p>{props.name}</p>
    </div>
  )
}

// Product.propTypes = { 
//     name:String,
//     teaUrl:String,
// }

export default Product