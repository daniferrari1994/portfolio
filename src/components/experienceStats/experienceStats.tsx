import React, { useEffect, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { CounterWrapper, NumberText, TitleBox } from './styled';

interface ICounter {
  duration?: number;
  targetNumber: number;
  titleBottom: string;
  titleTop: string;
}

const Counter: React.FC<ICounter> = ({ duration = 2000, targetNumber, titleBottom, titleTop }) => {
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
      <NumberText fontSize='5xl'>
        {count}
      </NumberText>
      <Flex alignItems="center" direction="column" mx={6}>
        <TitleBox lineHeight="1.2" textAlign="start">
          <Text color='#ffffffea' fontSize="lg">
            {titleTop}
          </Text>
          <Text color='#ffffffea' fontSize="lg">
            {titleBottom}
          </Text>
        </TitleBox>
      </Flex>
    </CounterWrapper>
  );
};

const ExperienceStats: React.FC = () => {
  const { t } = useTranslation();
  
  const countersData = [
    { targetNumber: 4, titleBottom: t('counters.experience'), titleTop: t('counters.yearsOfExperience') },
    { targetNumber: 4, titleBottom: t('counters.completed'), titleTop: t('counters.projects') },
    { targetNumber: 6, titleBottom: t('counters.mastered'), titleTop: t('counters.technologies') },
    { targetNumber: 600, titleBottom: t('counters.commitsTitle'), titleTop: t('counters.commits') },
  ];

  return (
    <Flex alignItems="center" flexWrap="wrap" justifyContent="center" p={4}>
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
