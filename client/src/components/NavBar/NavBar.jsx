import React from 'react';
import { FaBars} from 'react-icons/fa';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon, 
  NavMenu,
  NavItem,
  NavLinks,  
  NavBtn, 
  NavBtnLink 
} from './NavBarElements'

const NavBar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" id="nav-link">Pete Chicchetti</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="/" id="nav-link">About Me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/builds" id="nav-link">Contact</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/discussions" id="nav-link">Portfolio</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/signup" id="nav-link" style={{ display: 'none' }}>Sign Up</NavLinks>
              </NavItem>
            </NavMenu> 
            <NavBtn>
              <NavBtnLink  id="nav-link">Resume</NavBtnLink>
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default NavBar;