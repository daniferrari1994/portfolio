import React, { useState } from 'react';
import { Button,Image } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import {
  Logo,
  MenuContainer,
  MenuItemsContainer,
  MenuOption,
  MenuOptionContainer,
  StyledLink,
} from './styled';
import LanguageSwitcher from '../languageSwitcher';
import logo from '../../assets/logoImage/logoTeal.png'

const Menu = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const location = useLocation();

  return (
    <MenuContainer id="MenuContainer">
      <Logo className="Logo">
        <Image alt={logo} h="60px" src={logo} />
      </Logo>
      <MenuItemsContainer>
      <MenuOptionContainer className="SideMenuOption">
          <MenuOption className="MenuOption">
            <Link to="/">
              <StyledLink isActive={location.pathname === "/"}>
                Home
              </StyledLink>
            </Link>
          </MenuOption>
          <MenuOption className="MenuOption">
            <Link to="/resume">
              <StyledLink isActive={location.pathname === "/resume"}>
                Resume
              </StyledLink>
            </Link>
          </MenuOption>
          <MenuOption className="MenuOption">
            <Link to="/projects">
              <StyledLink isActive={location.pathname === "/projects"}>
                Work
              </StyledLink>
            </Link>
          </MenuOption>
          <MenuOption className="MenuOption">
            <Link to="/contact">
              <Button className="textLinkButton" variant="solid">
                Contact me
              </Button>
            </Link>
          </MenuOption>
          <MenuOption>
            <LanguageSwitcher />
          </MenuOption>
        </MenuOptionContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}


export default Menu;
