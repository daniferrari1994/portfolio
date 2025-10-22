import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

export const ContentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    gap: 15px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    align-items: center;
    text-align: center;
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const DescriptionText = styled.span`
  color: #ffffffea;
  max-width: 500px;
  font-size: 1rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 0.95rem;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 5px;
  }
`;

export const HeadingText = styled.h2`
  color: #ffffffea;
  font-family: 'Roboto Mono', monospace;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.2;

  .highlighted-text {
    color: #5ad3bd;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    font-size: 2.2rem;
    text-align: center;
    line-height: 1.1;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }

  @media (max-width: 360px) {
    font-size: 1.3rem;
  }
`;

export const HomeContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  margin-top: 80px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    padding: 20px 15px 40px;
    justify-content: flex-start;
    margin-top: 0;
    position: relative;
    top: 150px;
    overflow-x: hidden;
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

export const HomeContentContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
  gap: 40px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
  }

  @media (max-width: 580px) {
    gap: 25px;
    margin-bottom: 30px;
    padding-top: 10px;
  }

  @media (max-width: 480px) {
    gap: 20px;
    margin-bottom: 25px;
    padding-top: 5px;
  }

  @media (max-width: 360px) {
    gap: 15px;
    margin-bottom: 20px;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    max-width: 95%;
    padding: 0 10px;
  }
`;

export const SocialLinks = styled(Box)`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px;
    margin-top: 25px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-top: 20px;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    gap: 15px;
    width: 100%;

    button {
      width: 100%;
      max-width: 200px;
    }
  }
`;

export const SubTitle = styled.span`
  color: #5ad3bd;
  font-size: 1.25rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
