import { Box, Button } from "@chakra-ui/react";
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  align-items: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  padding: 24px;
  width: 120px;

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
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: flex-start;
`;
