import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';
const Navbar = () => {
  return (
    <div className='navContainer'>
        <h2 className='logo'>TypeWriter</h2>
        <div className='linkSection'>
          <Link to="/practice">Practice</Link>
          <Link to="/typingTest">Typing Test</Link>
          <Link to="/compete">Compete</Link>
          <Link to="/History">History</Link>
        </div>
          <Link className="btn" to="/sign-in"><span>Sign-in</span></Link>
    </div>
  )
}

export default Navbar
