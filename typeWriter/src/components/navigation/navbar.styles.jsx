import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Navigation = styled.nav`

  width: 1240px;
  height: 84px;


  /* White */

  background: #ffffff;
`
export const Logo = styled.div`
  position: absolute;
  width: 115px;
  height: 24px;
  left: 146px;
  top: 33px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-transform: capitalize;

  /* Black */

  color: #000000;
`

export const NavLinks = styled.div`
  /* Nav Links */

  /* Auto layout */

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 32px;

  position: absolute;
  width: 284px;
  height: 19px;
  left: 288px;
  top: 35px;
`

export const NavLink = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: capitalize;
  cursor: pointer;

  /* Black */

  color: #000000;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`

export const Button = styled.button`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 10px;

  position: absolute;
  width: 143px;
  height: 42px;
  left: 1000px;
  top: 0px;
  font-family: inherit;
  border: none;
  cursor: pointer;

  /* Blue */

  background: #149bfc;
`
