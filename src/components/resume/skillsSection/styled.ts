import { Box, Button } from "@chakra-ui/react";
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 110px;
  justify-content: center;
  padding: 20px;
  width: 130px;

  .skill-icon-container {
    .skill-icon {
      font-size: 50px !important;
      width: 50px !important;
      height: 50px !important;
    }
  }

  @media (max-width: 768px) {
    height: 110px;
    width: 110px;
    padding: 16px;
    justify-content: space-between;

    .skill-icon-container {
      .skill-icon {
        font-size: 50px !important;
        width: 50px !important;
        height: 50px !important;
      }
    }
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    height: 100px;
    width: 100px;
    padding: 12px;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    height: 100px;
    width: 100px;
    padding: 12px;
    justify-content: space-between;
  }

  @media (max-width: 360px) {
    height: 90px;
    width: 90px;
    padding: 8px;
    justify-content: space-between;
  }

  &:hover {
    background-color: #444;
    color: #5ad3bd;
  }
`;

export const StyledContainer = styled(Box)`
  max-height: 500px;
  max-width: 560px;
  min-height: 460px;
  min-width: 300px;
  overflow-y: auto;
  padding: 16px;
  text-align: center;

  @media (max-width: 768px) {
    max-height: 400px;
    min-height: 300px;
    max-width: 100%;
    min-width: 100%;
    padding: 12px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    max-height: 300px;
    min-height: 250px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    max-height: 300px;
    min-height: 250px;
    padding: 10px;
  }

  @media (max-width: 360px) {
    max-height: 280px;
    min-height: 220px;
    padding: 8px;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5ad3bd;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: '#0000000';
    border-radius: 20px;
  }

  .headingSkills {
    display: flex;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media (max-width: 360px) {
      font-size: 0.85rem;
    }
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 12px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    justify-content: center;
    gap: 10px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (max-width: 360px) {
    gap: 8px;
  }
`;
