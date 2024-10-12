import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';

export const CounterWrapper = styled(Flex)`
  align-items: center;
  direction: row;
  margin: 0 6px;
`;

export const NumberText = styled(Text)`
  color: #ffffffea;
  font-family: 'Source Code Pro', serif;
  font-weight: bold;
  margin-bottom: 1px;
`;

export const TitleBox = styled(Box)`
  line-height: 1.2;
  text-align: start;
`;
