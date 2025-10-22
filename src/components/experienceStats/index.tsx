import React, { memo, useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CounterWrapper, NumberText, TitleBox } from './styled';

interface ICounter {
  duration?: number;
  targetNumber: number;
  titleBottom: string;
  titleTop: string;
}

const Counter: React.FC<ICounter> = memo(({
  duration = 2000,
  targetNumber,
  titleBottom,
  titleTop,
}) => {
  const [count, setCount] = useState(0);
  const increment = targetNumber / (duration / 50);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        clearInterval(interval);
        setCount(targetNumber);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [increment, targetNumber]);

  return (
    <CounterWrapper data-testid="counter">
      <NumberText fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}>{count}</NumberText>
      <Flex alignItems="center" direction="column" mx={{ base: 2, md: 6 }}>
        <TitleBox lineHeight="1.2" textAlign="start">
          <Text color='#ffffffea' fontSize={{ base: "sm", sm: "md", md: "lg" }}>{titleTop}</Text>
          <Text color='#ffffffea' fontSize={{ base: "sm", sm: "md", md: "lg" }}>{titleBottom}</Text>
        </TitleBox>
      </Flex>
    </CounterWrapper>
  );
});

Counter.displayName = 'Counter';

const ExperienceStats: React.FC = () => {
  const { t } = useTranslation();

  const countersData = [
    { targetNumber: 5, titleBottom: t('counters.experience'), titleTop: t('counters.yearsOfExperience') },
    { targetNumber: 3, titleBottom: t('counters.completed'), titleTop: t('counters.projects') },
    { targetNumber: 6, titleBottom: t('counters.mastered'), titleTop: t('counters.technologies') },
    { targetNumber: 2000, titleBottom: t('counters.commitsTitle'), titleTop: t('counters.commits') },
  ];

  return (
    <Flex 
      alignItems="center" 
      flexWrap="wrap" 
      justifyContent="center" 
      p={{ base: 2, md: 4 }}
      gap={{ base: 1, sm: 2, md: 4 }}
      maxWidth="100%"
      direction={{ base: "column", sm: "row" }}
    >
      {countersData.map((counter, index) => (
        <Counter
          key={index}
          targetNumber={counter.targetNumber}
          titleBottom={counter.titleBottom}
          titleTop={counter.titleTop}
        />
      ))}
    </Flex>
  );
};

export default ExperienceStats;