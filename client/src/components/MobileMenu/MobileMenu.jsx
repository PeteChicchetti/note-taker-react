import React from 'react';
import { 
    MenuContainer, 
    CloseIcon, 
    Icon, 
    MobileWrapper, 
    MobileDropdown, 
    MobileLink, 
    MobileBtnWrapper, 
    MobileRoute 
} from './MobileMenuElements';


const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <MenuContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <MobileWrapper>
            <MobileDropdown>
                <MobileLink to="/" onClick={toggle}>About Me</MobileLink>
                <MobileLink to="/builds" onClick={toggle}>Contact</MobileLink>
                <MobileLink to="/discussions" onClick={toggle}>Portfolio</MobileLink>
                <MobileLink to="/signup" onClick={toggle} style={{ display: 'none' }}>Sign Up</MobileLink>
            </MobileDropdown>
            <MobileBtnWrapper>
                <MobileRoute onClick={toggle}>Resume</MobileRoute>
            </MobileBtnWrapper>
        </MobileWrapper>
    </MenuContainer>
  )
}

export default MobileMenu;