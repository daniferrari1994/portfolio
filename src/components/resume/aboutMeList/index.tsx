import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface IDataContactList {
  data: Record<string, string>;
}

const DataContactList: React.FC<IDataContactList> = ({ data }) => {
  const entries = Object.entries(data);

  return (
    <Flex wrap="wrap" justify="space-between">
      {entries.map(([key, value], index) => (
        <Flex
          direction="column"
          key={index}
          mb={4}
          width={['100%', '48%']}
        >
          <Text
            className="aboutMe-data"
            display="inline"
            fontSize="md"
            fontWeight="bold"
          >
            {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
          </Text>
          <Text
            className="aboutMe-text"
            display="inline"
            fontSize="md"
          >
            {value}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};

export default DataContactList;
