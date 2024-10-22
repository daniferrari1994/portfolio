import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

interface IContactList {
  data: {
    address: string;
    email: string;
    phone: string;
  };
}

const ContactList: React.FC<IContactList> = ({ data }) => {
  const entries = Object.entries(data);

  const generateIcon = (icon: any) => (
    <FontAwesomeIcon color="#5ad3bd" icon={icon} size="xl" />
  );

  const iconMap: Record<string, React.ReactElement> = {
    phone: generateIcon(faPhone),
    email: generateIcon(faEnvelope),
    address: generateIcon(faLocationDot),
  };

  return (
    <Flex direction="column">
      {entries.map(([key, value], index) => (
        <Flex
          alignItems="center"
          direction="row"
          key={index}
          my="8px"
        >
          <Box 
            alignContent="center"
            bg="#3333336e"
            borderRadius="6px"
            h="60px"
            textAlign="center"
            w="60px"
            >
            {iconMap[key] && iconMap[key]}
          </Box>
          <Flex key={index} direction="column" mx="12px">
            <Text
              className="aboutMe-data"
              color="#909dad"
              display="inline"
              fontSize="md"
              fontWeight="bold"
            >
              {`${key.charAt(0).toUpperCase() + key.slice(1)}:`}
            </Text>
            <Text
              className="aboutMe-text"
              color="#ffffffea"
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