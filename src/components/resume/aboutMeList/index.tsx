import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface IDataContactList {
  data: Record<string, string | string[]>;
}

const DataContactList: React.FC<IDataContactList> = ({ data }) => {
  const { t } = useTranslation();
  const entries = Object.entries(data);

  return (
    <Flex wrap="wrap" justify="space-between">
      {entries.map(([key, value], index) => {
        const translatedValue = Array.isArray(value) && key === 'languages'
          ? value.map(v => t(`aboutMe.data.aboutMeValues.${v}`)).join(', ')
          : t(`aboutMe.data.aboutMeValues.${value}`) || value;

        return (
          <Flex
            direction="column"
            key={index}
            mb={4}
            width={['100%', '100%', '48%']}
          >
            <Text
              className="aboutMe-data"
              display="inline"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight="bold"
            >
              {`${t(`aboutMe.data.aboutMe.${key}`)}:`}
            </Text>
            <Text
              className="aboutMe-text"
              display="inline"
              fontSize={{ base: "sm", md: "md" }}
            >
              {translatedValue}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default DataContactList;
