import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface TwoColumnListProps {
  data: Record<string, string>;
}

const TwoColumnList: React.FC<TwoColumnListProps> = ({ data }) => {
  const entries = Object.entries(data);

  return (
    <Flex wrap="wrap" justify="space-between">
      {entries.map(([key, value], index) => (
        <Flex 
          key={index} 
          width={['100%', '48%']} 
          mb={4} 
          direction="column"
        >
          <Text 
            fontSize='md'
            fontWeight="bold" 
            display="inline" 
            className='aboutMe-data'
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)}:`} </Text>
          <Text 
            fontSize='md' 
            display="inline" 
            className='aboutMe-text'
          >
            {value}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default TwoColumnList;
