import React from 'react';
import { Button, Image } from '@chakra-ui/react';
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
import logo from '../../assets/logoImage/logoTeal.png';

const Menu: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/resume", label: "Resume" },
    { path: "/projects", label: "Work" },
  ];

  return (
    <MenuContainer id="MenuContainer">
      <Logo className="Logo">
        <Image alt="Logo" h="60px" src={logo} />
      </Logo>
      <MenuItemsContainer>
        <MenuOptionContainer className="SideMenuOption">
          {menuItems.map(({ path, label }) => (
            <MenuOption key={path} className="MenuOption">
              <Link to={path}>
                <StyledLink isActive={location.pathname === path} aria-label={label}>
                  {label}
                </StyledLink>
              </Link>
            </MenuOption>
          ))}
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
};

export default Menu;
