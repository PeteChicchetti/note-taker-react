import React from 'react';
import Moment from 'react-moment';
import AuthService from '../../utils/auth';
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
    const logout = () => AuthService.logout()


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
              {AuthService.loggedIn() ? <NavBtnLink onClick={logout} id="nav-link signOut">Sign Out</NavBtnLink> : <NavBtnLink onClick={logout} id="nav-link signOut" style={{ display: 'none' }}>Sign Out</NavBtnLink> }
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default NavBar;