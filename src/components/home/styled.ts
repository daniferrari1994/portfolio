import styled from 'styled-components';
import { Box } from '@chakra-ui/react';

export const HomeContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  height: 100%;
`;

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const SubTitle = styled.span`
  color: teal;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const HeadingText = styled.h2`
  color: rgba(255, 255, 255, 0.92);
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;

  .highlighted-text {
    color: #5ad3bd;
  }
`;

export const DescriptionText = styled.span`
  color: rgba(255, 255, 255, 0.92);
  max-width: 500px;
`;

export const SocialLinks = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
`;
