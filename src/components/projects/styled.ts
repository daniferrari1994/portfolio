import { Box, Button, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 1400px;
  min-width: 1000px;
  padding: 16px;
  padding-top: 80px;

  @media (max-width: 1200px) {
    min-width: auto;
    max-width: 100%;
    padding: 16px 20px;
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 15px 40px;
    position: relative;
    top: 150px;
    flex-direction: column;
  }

  @media (max-width: 580px) {
    top: 170px;
  }

  /* Surface Duo específico */
  @media (max-width: 540px) {
    top: 190px;
  }

  @media (max-width: 480px) {
    top: 200px;
    padding: 15px 10px 30px;
  }

  /* iPhone SE específico */
  @media (max-width: 375px) {
    top: 270px;
  }

  /* Samsung Galaxy S8 específico */
  @media (max-width: 360px) {
    top: 280px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    overflow: hidden;
    max-width: 100vw;
    height: 100vh;
    max-height: 100vh;
    top: 80px;
    padding: 10px 10px 10px;
    justify-content: center;
    align-items: center;
  }
`;

export const ProjectContent = styled(Flex)`
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  max-width: 1400px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    box-shadow: none;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    flex-direction: column;
    max-width: 95%;
  }
`;

export const ProjectInfoColumn = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  @media (max-width: 768px) {
    order: 2;
    padding: 20px 10px;
    text-align: center;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    order: 2;
    padding: 15px 10px;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 15px 5px;
  }

  .buttonLink:hover {
    transform: none;
    background-color: #414040;
  }

  .buttonLinkGithub:hover {
    background-color: #414040;
  }

  /* Solo aplicar rotación en desktop */
  @media (min-width: 769px) {
    .buttonLink:hover {
      transform: rotate(-35deg);
    }
  }
`;

export const ProjectImageColumn = styled(Box)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 20px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    order: 1;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const StyledButton = styled(Button)`
  margin: 0 18px 28px 0;

  @media (max-width: 768px) {
    margin: 0 10px 15px 0;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin: 0 8px 10px 0;
  }

  @media (max-width: 480px) {
    margin: 0 8px 12px 0;
  }

  @media (max-width: 360px) {
    margin: 0 6px 10px 0;
  }

  &:hover {
    background-color: #459c8c;
  }
`;
