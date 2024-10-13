import React from 'react';
import { Button, Heading, Text, Flex } from '@chakra-ui/react';
import { ContactForm, ContactFormContainer, ContactInfo } from './styled';
import CustomInputField from '../contact/customInput';
import locales from '../../data/locales.json';
import ContactList from './contactList';
import { validateEmail, validateNameOrSurname, validatePhone } from '../utils/validations';

const ContactComponent: React.FC = () => {
  return (
    <ContactFormContainer>
      <ContactForm>
        <Flex direction="column">
          <Heading
            as="h2"
            color="#5ad3bd"
            fontFamily="'Roboto Mono', monospace"
            fontWeight="400"
            mb={4}
            size="lg"
            >
            {locales.contact.title}
          </Heading>
          <Text
            mb={6}
            color="#ffffffea"
            fontFamily="'Roboto Mono', monospace"
            fontSize="sm"
            fontWeight="300"
          >
            {locales.contact.description}
          </Text>
        </Flex>
        <Flex w="480px" wrap="wrap" justify="space-between">
          <CustomInputField id="first-name" placeholder="Name" validate={validateNameOrSurname} />
          <CustomInputField id="last-name" placeholder="Lastname" validate={validateNameOrSurname} />
          <CustomInputField id="email" placeholder="Email address" validate={validateEmail}/>
          <CustomInputField id="phone" placeholder="Phone number" validate={validatePhone} />
          <CustomInputField id="message" placeholder="Type your message here" isTextArea />
          <Button
            borderRadius="50px"
            color="#5ad3bd"
            colorScheme="#333"
            gap="5px"
            variant="outline"
            _hover={{ bg: '#459c8c', color: '#333' }}
          >
            Send Message
          </Button>
        </Flex>
      </ContactForm>
      <ContactInfo>
        <ContactList data={locales.contact.data}/>
      </ContactInfo>
    </ContactFormContainer>
  );
};

export default ContactComponent;
