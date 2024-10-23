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
  justify-content: space-evenly;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const MenuItemsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
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

    &:hover {
      background-color: #459c8c;
    }
  }
`;

export const MenuOptionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-right: 20px;
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
`;
