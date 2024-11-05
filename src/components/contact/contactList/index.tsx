import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

interface IContactList {
  data: {
    address: string;
    email: string;
    phone: string;
  };
}

const iconMap: Record<string, React.ReactElement> = {
  phone: <FontAwesomeIcon color="#5ad3bd" icon={faPhone} size="xl" />,
  email: <FontAwesomeIcon color="#5ad3bd" icon={faEnvelope} size="xl" />,
  address: <FontAwesomeIcon color="#5ad3bd" icon={faLocationDot} size="xl" />,
};

const ContactList: React.FC<IContactList> = ({ data }) => {
  const { t } = useTranslation();
  const entries = Object.entries(data);

  return (
    <Flex data-testid="flex-container" direction="column">
      {entries.map(([key, value]) => (
        <Flex
          alignItems="center"
          data-testid="aboutMe-container"
          direction="row"
          key={key}
          my="8px"
        >
          <Box
            alignContent="center"
            bg="#3333336e"
            borderRadius="6px"
            data-testid="box-container"
            h="60px"
            textAlign="center"
            w="60px"
          >
            {iconMap[key]}
          </Box>
          <Flex direction="column" mx="12px">
            <Text
              className="aboutMe-data"
              color="#909dad"
              data-testid="aboutMe-data"
              display="inline"
              fontSize="md"
              fontWeight="bold"
            >
              {`${t(`contactLabels.${key}`)}:`}
            </Text>
            <Text
              className="aboutMe-text"
              color="#ffffffea"
              data-testid="aboutMe-text"
              display="inline"
              fontSize="md"
            >
              {value}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default ContactList;
