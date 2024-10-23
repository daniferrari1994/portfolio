import React from 'react';
import { Button, Fieldset, Heading, Text, Flex } from '@chakra-ui/react';
import { ContactForm, ContactFormContainer, ContactInfo } from './styled';
import { useTranslation } from 'react-i18next';
import CustomInputField from '../contact/customInput';
import ContactList from './contactList';
import personalData from '../../data/personalData.json';
import useFormValidation from '@/utils/validations';

const ContactComponent: React.FC = () => {
  const { t } = useTranslation();
  const { validateEmail, validateNameOrSurname, validatePhone, validateTextAreaNotEmpty } = useFormValidation();

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
        <Flex w="480px">
          <Fieldset.Root>
            <Fieldset.Content>
              <CustomInputField id="first-name" placeholder={t('contact.input.name')} validate={validateNameOrSurname} />
              <CustomInputField id="last-name" placeholder={t('contact.input.lastname')} validate={validateNameOrSurname} />
              <CustomInputField id="email" placeholder={t('contact.input.email')} validate={validateEmail} />
              <CustomInputField id="phone" placeholder={t('contact.input.phone')} validate={validatePhone} />
              <CustomInputField id="message" placeholder={t('contact.input.message')} isTextArea validate={validateTextAreaNotEmpty} />
            </Fieldset.Content>
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
          </Fieldset.Root>
        </Flex>
      </ContactForm>
      <ContactInfo>
        <ContactList data={personalData.data.contact} />
      </ContactInfo>
    </ContactFormContainer>
  );
};

export default ContactComponent;
