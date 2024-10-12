import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const CounterWrapper = styled(Flex)`
  direction: row;
  align-items: center;
  margin: 0 6px;
`;

export const NumberText = styled(Text)`
  font-weight: bold;
  font-family: 'Source Code Pro', serif;
  color: #ffffffea;
  margin-bottom: 1px;
`;

export const TitleBox = styled(Box)`
  text-align: start;
  line-height: 1.2;
`;
