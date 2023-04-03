import React from 'react';

import AuthService from '../../utils/auth';
// import { FaBars} from 'react-icons/fa';
import LogoSrc from '../../assets/logo.png';
import { 
  Nav,
  NavbarContainer,
  NavLogo,
  Logo,
  // MobileIcon,  
  NavBtn, 
  NavBtnLink
} from './NavBarElements'

const NavBar = ({ toggle }) => {
    const logout = () => AuthService.logout()


  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo><Logo src={LogoSrc} />Note Taker</NavLogo>
            {/* <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon> */}
          {AuthService.loggedIn() ?
            <>
              <NavBtn>
                <NavBtnLink onClick={logout} id="nav-link signOut">Sign Out</NavBtnLink> 
              </NavBtn>
            </>   
          :
            null
          }    
          </NavbarContainer>  
        </Nav>
    </>
  )
}

export default NavBar;