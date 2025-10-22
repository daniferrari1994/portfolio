import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledInfoCard = styled(Box)`
  background-color: #303030c5;
  border-radius: 2%;
  flex-basis: 100%;
  margin: 4px;
  max-width: 100%;
  padding: 25px 30px;

  @media (max-width: 768px) {
    padding: 20px 25px;
    margin: 6px 0;
  }

  /* Asus Zenbook Fold específico */
  @media (max-width: 853px) and (min-height: 1200px) {
    padding: 15px 20px;
    margin: 4px 0;
  }

  @media (max-width: 480px) {
    padding: 15px 20px;
    margin: 4px 0;
  }

  @media (max-width: 360px) {
    padding: 12px 15px;
    margin: 3px 0;
  }

  .infoCard {
    font-family: 'Roboto Mono', monospace;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }

    @media (max-width: 360px) {
      font-size: 0.85rem;
    }
  }

  .infoCard-title {
    margin: 4px 0 8px;

    @media (max-width: 480px) {
      margin: 3px 0 6px;
    }
  }
`;
