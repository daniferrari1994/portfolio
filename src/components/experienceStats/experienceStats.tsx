import React, { useEffect, useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { CounterWrapper, NumberText, TitleBox } from './styled';

interface CounterProps {
  titleTop: string;
  titleBottom: string;
  targetNumber: number;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ titleTop, titleBottom, targetNumber, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(interval);
        setCount(targetNumber);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [targetNumber, duration]);

  return (
    <CounterWrapper>
      <NumberText fontSize='5xl'>{count}</NumberText>
      <Flex direction="column" alignItems="center" mx={6}>
        <TitleBox textAlign="start" lineHeight="1.2">
          <Text fontSize="lg" color='#ffffffea'>
            {titleTop}
          </Text>
          <Text fontSize="lg" color='#ffffffea'>
            {titleBottom}
          </Text>
        </TitleBox>
      </Flex>
    </CounterWrapper>
  );
};

const ExperienceStats: React.FC = () => {
  return (
    <Flex justifyContent="center" alignItems="center" flexWrap="wrap" p={4}>
      <Counter titleTop="Years of" titleBottom="Experience" targetNumber={4} />
      <Counter titleTop="Projects" titleBottom="Completed" targetNumber={4} />
      <Counter titleTop="Technologies" titleBottom="Mastered" targetNumber={6} />
      <Counter titleTop="Code" titleBottom="Commits" targetNumber={600} />
    </Flex>
  );
};

export default ExperienceStats;
