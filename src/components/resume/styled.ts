import { Box, VStack } from "@chakra-ui/react";
import { Button, type ButtonProps } from "@chakra-ui/react";
import { styled } from "styled-components";

export const ResumeContainer = styled(Box)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  padding-top: 80px;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 15px 40px;
    position: relative;
    top: 150px;
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

export const SectionContainer = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 80%;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const SectionOne = styled(VStack)`
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 350px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
    gap: 15px;
    flex-direction: column;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    width: 100%;
    margin-bottom: 15px;
    gap: 10px;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 15px;
  }

  @media (max-width: 360px) {
    gap: 8px;
    margin-bottom: 12px;
  }

  .headingResume {
    align-self: flex-start;
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;

    @media (max-width: 768px) {
      align-self: center;
      text-align: center;
      margin: 5px 0;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      align-self: center;
      text-align: center;
      font-size: 1.8rem;
      margin: 5px 0;
    }
  }
  
  .textResume {
    align-self: flex-start;
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
    max-width: 300px;

    @media (max-width: 768px) {
      align-self: center;
      text-align: center;
      max-width: 100%;
      margin: 5px 0 15px 0;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      align-self: center;
      text-align: center;
      max-width: 100%;
      font-size: 0.85rem;
      margin: 5px 0 10px 0;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      margin: 5px 0 12px 0;
    }
  }

  /* Contenedor horizontal para los botones en móvil */
  .button-container {
    @media (max-width: 768px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      width: 100%;
      max-width: 400px;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      gap: 8px;
      max-width: 350px;
    }

    @media (max-width: 480px) {
      gap: 8px;
      max-width: 320px;
    }

    @media (max-width: 360px) {
      gap: 6px;
      max-width: 280px;
    }
  }
`;

export const SectionTwo = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  margin-left: 70px;
  max-height: 500px;
  max-width: 560px;
  min-height: 560px;
  min-width: 300px;

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 100%;
    min-width: 100%;
    max-height: none;
    min-height: auto;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    margin-left: 0;
    max-width: 95%;
    min-width: 95%;
    max-height: 400px;
    min-height: 350px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }

  .flex-scrollable {
    overflow-y: auto;

    @media (max-width: 768px) {
      max-height: 400px;
    }

    /* Asus Zenbook Fold específico */
    @media (max-width: 853px) and (min-height: 1200px) {
      max-height: 300px;
    }

    @media (max-width: 480px) {
      max-height: 300px;
    }
  }

  .flex-scrollable::-webkit-scrollbar {
    width: 4px;
  }

  .flex-scrollable::-webkit-scrollbar-thumb {
    background-color: #5ad3bd;
    border-radius: 20px;
  }

  .flex-scrollable::-webkit-scrollbar-track {
    background-color: '#0000000';
    border-radius: 20px;
  }

  .aboutMe-data {
    color: #718096;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.85rem;
    }
  }

  .textResume {
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }

  .headingResume,
  .aboutMe-text {
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;

    @media (max-width: 480px) {
      margin: 8px 0;
      font-size: 0.9rem;
    }
  }
`;

export const StyledButton = styled(Button)<ButtonProps & { isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#333')};
  color: ${({ isActive }) => (isActive ? '#333 !important' : '#ffffffea')};
  letter-spacing: 2px;
  margin: 8px 0;
  width: 90%;
  font-family: 'Roboto Mono', monospace;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    padding: 12px 8px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    white-space: normal;
    line-height: 1.2;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    padding: 10px 6px;
    font-size: 0.75rem;
    height: 45px;
  }

  @media (max-width: 480px) {
    padding: 10px 6px;
    font-size: 0.7rem;
    height: 45px;
  }

  @media (max-width: 360px) {
    padding: 8px 4px;
    font-size: 0.65rem;
    height: 40px;
    letter-spacing: 0.5px;
  }

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#459c8c')};
    color: ${({ isActive }) => (isActive ? '#ffffffea' : '#333')};
  }
`;
