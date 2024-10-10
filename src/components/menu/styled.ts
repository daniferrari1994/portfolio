import styled from 'styled-components';
import { theme } from '@chakra-ui/react';

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #333;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Logo = styled.div`
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`;

export const MenuOption = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: ${theme.colors.teal[300]};
`;

export const MenuLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuLink = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color: ${theme.colors.teal[300]};
`;
