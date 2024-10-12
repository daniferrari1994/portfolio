import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const StyledInfoCard = styled(Box)`
  background-color: #303030c5;
  border-radius: 2%;
  flex-basis: 48.5%;
  height: 140px;
  margin: 4px;
  max-width: 50%;
  padding: 25px 30px;

  .infoCard {
    font-family: 'Roboto Mono', monospace;
  }

  .infoCard-title {
    margin: 4px 0 8px;
  }
`;
