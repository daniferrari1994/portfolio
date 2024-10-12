import React from 'react';
import { Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faD } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import {
  Logo,
  MenuContainer,
  MenuItemsContainer,
  MenuOption,
  MenuOptionContainer,
  StyledLink,
} from './styled';

const Menu = () => {
  const location = useLocation();

  return (
    <MenuContainer id="MenuContainer">
      <Logo className="Logo">
        <FontAwesomeIcon icon={faD} size="2x" />
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
        </MenuOptionContainer>
      </MenuItemsContainer>
    </MenuContainer>
  );
}


export default Menu;
