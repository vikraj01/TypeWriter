import React from 'react'
import { Button, Logo, Navigation, NavLink, NavLinks } from './navbar.styles'

const Navbar = () => {
  return (
    <>
      <Navigation>
        <Logo>TypeWriter</Logo>
        <NavLinks>
          <NavLink>Practice</NavLink>
          <NavLink>Typing Test</NavLink>
          <NavLink>Compete</NavLink>
          <NavLink>History</NavLink>
          <Button>Sign-in</Button>
        </NavLinks>
      </Navigation>
    </>
  )
}

export default Navbar
