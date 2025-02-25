import React from 'react'

import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/"><li>Home</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/contact"><li>Contact</li></NavLink>
        <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/about"><li>About</li></NavLink>
      </nav>
    </>
  )
}

export default Navbar
