import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const CounterWrapper = styled(Flex)`
  align-items: center;
  direction: row;
  margin: 0 6px;

  @media (max-width: 768px) {
    margin: 8px 4px;
    flex-direction: column;
    text-align: center;
    min-width: 120px;
  }

  @media (max-width: 480px) {
    margin: 6px 2px;
    min-width: 100px;
  }

  @media (max-width: 360px) {
    margin: 4px 1px;
    min-width: 90px;
  }
`;

export const NumberText = styled(Text)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;

  @media (max-width: 768px) {
    margin-bottom: 4px;
  }

  @media (max-width: 480px) {
    margin-bottom: 2px;
  }
`;

export const TitleBox = styled(Box)`
  line-height: 1.2;
  text-align: start;

  @media (max-width: 768px) {
    text-align: center;
  }
`;
