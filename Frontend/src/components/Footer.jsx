import React from 'react'
import "../css/Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='Links'>
            <Link to="https://arfan.codes/"><h5>Portfolio</h5></Link>
            <Link to="https://github.com/ArfanAnulal"><h5>Github</h5></Link>
            <Link to="https://www.linkedin.com/in/arfanvanulal/"><h5>LinkedIn</h5></Link>
        </div>
        <p className='footer-text'>&copy; 2025  futball .io All rights NOT reserved (This is just a personal project, hehehe).</p>
    </div>
  )
}

export default Footer
