import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const Logo = styled.div``;

export const MenuContainer = styled.div`
  align-items: center;
  background-color: #333;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  height: 80px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const MenuItemsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuLink = styled.div`
  color: #5eead4;
  cursor: pointer;
  margin: 0 10px;
`;

export const MenuLinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

export const MenuOption = styled.div`
  color: #5eead4;
  cursor: pointer;
  margin: 0 10px;
  text-align: center;
  width: 100px;
  

  .textLink {
    box-sizing: content-box;
    font-family: 'Roboto Mono', monospace;
    font-weight: 500;
    padding-bottom: 2px;
  }

  .textLinkButton {
    background-color: #5ad3bd;
    border-radius: 50px;
    color: #333;
    min-width: 120px;

    &:hover {
      background-color: #459c8c;
    }
  }

  @media (max-width: 768px) {
    margin: 15px 0;
    width: auto;
    
    .textLinkButton {
      min-width: 200px;
      padding: 12px 24px;
    }
  }
`;

export const MenuOptionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-right: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-right: 0;
    width: 100%;
  }
`;

export const StyledLink = styled(Text)<{ isActive: boolean }>`
  box-sizing: content-box;
  color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#ffffffea')};
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
  padding-bottom: 2px;
  text-decoration: ${({ isActive }) => (isActive ? 'underline' : 'none')};
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;

  &:hover {
    color: #5ad3bd;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }
`;

// Nuevos componentes para el menú móvil
export const HamburgerButton = styled.button`
  background: none;
  border: none;
  color: #5eead4;
  cursor: pointer;
  display: none;
  flex-direction: column;
  padding: 8px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    background-color: #5eead4;
    border-radius: 2px;
    height: 3px;
    margin: 2px 0;
    transition: all 0.3s ease;
    width: 25px;
  }

  &.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  &.active span:nth-child(2) {
    opacity: 0;
  }

  &.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -6px);
  }
`;

export const MobileMenuOverlay = styled.div<{ isOpen: boolean }>`
  background-color: rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1001;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  background-color: #333;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
  height: 100vh;
  padding: 80px 20px 20px;
  position: fixed;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  top: 0;
  transition: right 0.3s ease;
  width: 300px;
  z-index: 1002;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenuClose = styled.button`
  background: none;
  border: none;
  color: #5eead4;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  right: 20px;
  top: 20px;
`;
