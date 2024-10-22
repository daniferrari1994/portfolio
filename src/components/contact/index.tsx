import React from 'react';
import { Button, Heading, Text, Flex } from '@chakra-ui/react';
import { ContactForm, ContactFormContainer, ContactInfo } from './styled';
import { validateEmail, validateNameOrSurname, validatePhone } from '../../utils/validations';
import { useTranslation } from 'react-i18next';
import CustomInputField from '../contact/customInput';
import ContactList from './contactList';
import personalData from '../../data/personalData.json'


const ContactComponent: React.FC = () => {
  const { t } = useTranslation();
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
            {t('contact.title')}
          </Heading>
          <Text
            mb={6}
            color="#ffffffea"
            fontFamily="'Roboto Mono', monospace"
            fontSize="sm"
            fontWeight="300"
          >
            {t('contact.description')}
          </Text>
        </Flex>
        <Flex w="480px" wrap="wrap" justify="space-between">
          <CustomInputField id="first-name" placeholder={t('contact.input.name')} validate={validateNameOrSurname} />
          <CustomInputField id="last-name" placeholder={t('contact.input.lastname')} validate={validateNameOrSurname} />
          <CustomInputField id="email" placeholder={t('contact.input.email')} validate={validateEmail}/>
          <CustomInputField id="phone" placeholder={t('contact.input.phone')} validate={validatePhone} />
          <CustomInputField id="message" placeholder={t('contact.input.message')} isTextArea />
          <Button
            borderRadius="50px"
            color="#5ad3bd"
            colorScheme="#333"
            gap="5px"
            variant="outline"
            _hover={{ bg: '#459c8c', color: '#333' }}
          >
            {t('contact.input.button')}
          </Button>
        </Flex>
      </ContactForm>
      <ContactInfo>
        <ContactList data={personalData.data.contact}/>
      </ContactInfo>
    </ContactFormContainer>
  );
};

export default ContactComponent;
