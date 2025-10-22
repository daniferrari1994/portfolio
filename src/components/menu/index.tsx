import React, { useState } from 'react';
import { Button, Image } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Logo,
  MenuContainer,
  MenuItemsContainer,
  MenuOption,
  MenuOptionContainer,
  StyledLink,
  HamburgerButton,
  MobileMenuOverlay,
  MobileMenuContainer,
  MobileMenuClose,
} from './styled';
import LanguageSwitcher from '../languageSwitcher';
import logo from '../../assets/logoImage/logoTeal.png';

const Menu: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { path: "/", label: t('menu.home') },
    { path: "/resume", label: t('menu.resume') },
    { path: "/projects", label: t('menu.work') },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuItemClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      <MenuContainer id="MenuContainer">
        <Logo className="Logo">
          <Image alt="Logo" h="60px" src={logo} />
        </Logo>
        
        {/* Menú desktop */}
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
                  {t('menu.contact')}
                </Button>
              </Link>
            </MenuOption>
            <MenuOption>
              <LanguageSwitcher />
            </MenuOption>
          </MenuOptionContainer>
        </MenuItemsContainer>

        {/* Botón hamburguesa para móvil */}
        <HamburgerButton 
          className={isMobileMenuOpen ? 'active' : ''} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </HamburgerButton>
      </MenuContainer>

      {/* Menú móvil */}
      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={closeMobileMenu} />
      <MobileMenuContainer isOpen={isMobileMenuOpen}>
        <MobileMenuClose onClick={closeMobileMenu} aria-label="Close mobile menu">
          ✕
        </MobileMenuClose>
        
        <MenuOptionContainer>
          {menuItems.map(({ path, label }) => (
            <MenuOption key={path} className="MenuOption">
              <Link to={path} onClick={handleMenuItemClick}>
                <StyledLink isActive={location.pathname === path} aria-label={label}>
                  {label}
                </StyledLink>
              </Link>
            </MenuOption>
          ))}
          <MenuOption className="MenuOption">
            <Link to="/contact" onClick={handleMenuItemClick}>
              <Button className="textLinkButton" variant="solid">
                {t('menu.contact')}
              </Button>
            </Link>
          </MenuOption>
          <MenuOption>
            <LanguageSwitcher />
          </MenuOption>
        </MenuOptionContainer>
      </MobileMenuContainer>
    </>
  );
};

export default Menu;
