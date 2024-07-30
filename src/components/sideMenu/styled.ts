import { theme } from '@chakra-ui/react';
import styled from 'styled-components';

export const SideMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
`;

export const Logo = styled.div`
  margin-bottom: 20px;
`;

export const SideMenuLanguage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const MenuLanguage = styled.div`
  margin: 5px 0;
  cursor: pointer;
  color: ${theme.colors.teal[300]};
`;

export const SideMenuOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const MenuOption = styled.div`
  margin: 10px 0;
  cursor: pointer;
  color: ${theme.colors.teal[300]};
`;

export const SideMenuLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuLink = styled.div`
  margin: 10px 0;
  cursor: pointer;
  color: ${theme.colors.teal[300]};
`;
