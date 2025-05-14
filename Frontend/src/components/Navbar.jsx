import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import Search from './Search'
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
  <div className="navbar-left logo">
    <Link to="/">
      <img src="logo.png" alt="Logo" />
    </Link>
    <div class="logo">
                    futball<span>.io</span>
                </div>
  </div>

  <div className="navbar-center">
    <Search />
  </div>

  {/* <div className="navbar-right links">
    <Link to="/teams">Teams</Link>
    <Link to="/players">Players</Link>
    <Link to="/matches">Matches</Link>
  </div> */}
</div>


    </div>
  )
}

export default Navbar
