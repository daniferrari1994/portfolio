import { Box, Button } from "@chakra-ui/react";
import styled from 'styled-components';

export const StyledContainer = styled(Box)`
  text-align: center;
  padding: 16px;
  max-height: 500px;
  max-width: 560px;
  min-height: 460px;
  min-width: 300px;
  overflow-y: auto;

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

  .headingSkills{
    display: flex;
    font-family: 'Roboto Mono', monospace;
  }
`;

export const StyledFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 16px;
`;

export const StyledButton = styled(Button)`
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 120px;

  &:hover {
    background-color: #444;
    color: #5ad3bd;
  }
`;
