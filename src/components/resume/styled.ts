import { Box, VStack } from "@chakra-ui/layout";
import { Button, ButtonProps } from "@chakra-ui/react";
import { styled } from "styled-components";

export const ResumeContainer = styled(Box)`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const SectionContainer = styled(Box)`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
  width: 80%;
`;

export const SectionOne = styled(VStack)`
  align-items: center;
  display: flex;
  gap: 15px;
  justify-content: center;
  width: 350px;

  .headingResume {
    align-self: flex-start;
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
  }
  
  .textResume {
    align-self: flex-start;
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
    max-width: 300px;
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

  .flex-scrollable {
    overflow-y: auto;
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
  }

  .textResume {
    color: #A0AEC0;
    font-family: 'Roboto Mono', monospace;
  }

  .headingResume,
  .aboutMe-text {
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
    margin: 10px 0;
  }
`;

export const StyledButton = styled(Button)<ButtonProps & { isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#333')};
  color: ${({ isActive }) => (isActive ? '#333 !important' : '#ffffffea')};
  letter-spacing: 2px;
  margin: 8px 0;
  width: 90%;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#459c8c')};
    color: ${({ isActive }) => (isActive ? '#ffffffea' : '#333')};
  }
`;
