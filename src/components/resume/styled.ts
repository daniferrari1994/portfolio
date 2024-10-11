import { Box, VStack } from "@chakra-ui/layout";
import { Button, ButtonProps } from "@chakra-ui/react";
import { styled } from "styled-components";

export const ResumeContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const SectionContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const SectionOne = styled(VStack)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  gap: 15px;

  .headingResume, .textResume {
    color: #ffffffea;
    align-self: flex-start;
    font-family: 'Roboto Mono', monospace;
  }
`;

export const StyledButton = styled(Button)<ButtonProps & { isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#333')};
  width: 100%;
  color-scheme: #333;
  margin: 8px 0;
  letter-spacing: 2px;
  font-family: 'Roboto Mono', monospace;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#5ad3bd' : '#459c8c')};
    color: ${({ isActive }) => (isActive ? '#ffffffea' : '#333')};
  }
`

export const SectionTwo = styled(Box)`
  flex: 1;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  .headingResume, .textResume {
    color: #ffffffea;
    font-family: 'Roboto Mono', monospace;
  }
`;