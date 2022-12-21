import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { optionChanged } from '../../redux/navbar'


const NavbarButton = props => {
    const optionSelected = useSelector((state) => state.navbar.optionSelected);
    const dispatch = useDispatch();
  return (
    <div style= {{textDecoration : optionSelected === props.name ? 'underline' : undefined }}>
        <Link to={props.Link} style={{textDecoration: 'none', color: 'black' }}>
            <button onClick={() => { dispatch(optionChanged(props.name)) }}>
                {props.name}
            </button> 
        </Link>
    </div>
  )
}

NavbarButton.propTypes = {
}

export default NavbarButton