import React from 'react';
import Moment from 'react-moment';
import { FaBars} from 'react-icons/fa';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon, 
  NavMenu,
  // NavItem,
  // NavLinks,  
  NavBtn, 
  NavBtnLink,
  Date
} from './NavBarElements'

const NavBar = ({ toggle }) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" id="nav-link">Note Taker</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
                <Date>
                  <Moment format='MMMM Do YYYY'></Moment>
                </Date>
            </NavMenu> 
            <NavBtn>
              <NavBtnLink  id="nav-link">Sign Out</NavBtnLink>
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default NavBar;