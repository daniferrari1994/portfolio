import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledInfoCard = styled(Box)`
  background-color: #303030c5;
  border-radius: 2%;
  flex-basis: 100%;
  margin: 4px;
  max-width: 100%;
  padding: 25px 30px;

  .infoCard {
    font-family: 'Roboto Mono', monospace;
  }

  .infoCard-title {
    margin: 4px 0 8px;
  }
`;
