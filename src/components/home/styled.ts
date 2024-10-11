import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

export const HomeContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
`;

export const HomeContentContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
`;

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  height: 100%;
  position: relative;
  width: fit-content;
  
  @keyframes rotateBorder {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    border: 3px dashed #5ad3bd;
    animation: rotateBorder 80s linear infinite;
    z-index: 1;
  }
`;

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const SubTitle = styled.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const HeadingText = styled.h2`
  color: #ffffffea;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;

  .highlighted-text {
    color: #5ad3bd;
  }
`;

export const DescriptionText = styled.span`
  color: #ffffffea;
  max-width: 500px;
`;

export const SocialLinks = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`;
