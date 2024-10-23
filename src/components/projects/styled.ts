import { Box, Button, Flex } from '@chakra-ui/react';
import styled from 'styled-components';

export const MainContainer = styled(Flex)`
  align-items: center;
  height: 100vh;
  justify-content: center;
  max-width: 1400px;
  min-width: 1000px;
  padding: 16px;
`;

export const ProjectContent = styled(Flex)`
  border-radius: var(--chakra-radii-md);
  box-shadow: var(--chakra-shadows-lg);
  max-width: 1400px;
  overflow: hidden;
`;

export const ProjectInfoColumn = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;

  .buttonLink:hover{
    transform: rotate(-35deg);
    background-color: #414040;
  }

  .buttonLinkGithub:hover {
    background-color: #414040;
  }
`;

export const ProjectImageColumn = styled(Box)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin: 0 18px 28px 0;

  &:hover {
    background-color: #459c8c;
  }
`;
