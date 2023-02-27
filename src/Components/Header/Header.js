import React from 'react'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
function Header() {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Rotana</Link>
          </div>
          <ul className="nav-links">
              <li>
                <NavLink to="/">Watch List</NavLink>
              </li>
              <li>
                <NavLink to="/watched">Watched</NavLink>
              </li>
              <li>
                <NavLink to="/add" className='btn'>Add</NavLink>
              </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header