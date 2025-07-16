import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Spinner, Text, Textarea } from '@chakra-ui/react';
import { ContactForm, ContactFormContainer, ContactInfo } from './styled';
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import FormInput from './customInput';
import ContactList from './contactList';
import personalData from '../../data/personalData.json';
import emailjs from '@emailjs/browser';
import useFormValidation from '@/utils/validations';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  textarea: string;
}

type Message = {
  text: string;
  type: 'error' | 'success';
};

const ContactComponent: React.FC = () => {
  const [charCount, setCharCount] = useState(0);
  const [message, setMessage] = useState<Message | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const maxLength = 1000;
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<Inputs>({ mode: 'onBlur' });
  const { validateEmail, validateNameOrSurname, validatePhone, validateTextAreaNotEmpty } = useFormValidation();

  const handleTrimAndReplaceSpaces = (value: string) => value.trim().replace(/\s{2,}/g, ' ');

  const onSubmit: SubmitHandler<Inputs> = async formData => {
    setIsLoading(true);
    try {
      const language = i18n.language;
      
      const templateId = language === 'en' ? 'template_9qrrjvn' : 'template_2oqsezt';
      
      await emailjs.send('service_o1b6fuo', templateId, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.textarea
      }, '0bWIr1jUN6IgRa1N6');
  
      setMessage({ text: t('contact.feedback.success'), type: 'success' });
      reset();
    } catch (error) {
      console.error(error);
      setMessage({ text: t('contact.feedback.error'), type: 'error' });
    } finally {
      setIsLoading(false);
      setTimeout(() => setMessage(null), 7000);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.value = handleTrimAndReplaceSpaces(e.target.value);
  };

  return (
    <ContactFormContainer>
      <ContactForm>
        <Flex direction="column">
          <Heading as="h2" color="#5ad3bd" fontFamily="'Roboto Mono', monospace" fontWeight="400" mb={4} size="lg">
            {t('contact.title')}
          </Heading>
          <Text mb={6} color="#ffffffea" fontFamily="'Roboto Mono', monospace" fontSize="sm" fontWeight="300">
            {t('contact.description')}
          </Text>
        </Flex>
        <Flex w="480px">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              placeholder={t('contact.input.name')}
              data-testid='input-firstName'
              register={register("firstName", { onBlur: handleInputBlur, validate: validateNameOrSurname })}
              error={errors.firstName}
              errorMessage={t('validationErrors.nameOrSurname.invalid')}
              maxLength={50}
            />
            <FormInput
              placeholder={t('contact.input.lastname')}
              data-testid="input-lastName"
              register={register("lastName", { onBlur: handleInputBlur, validate: validateNameOrSurname })}
              error={errors.lastName}
              errorMessage={t('validationErrors.nameOrSurname.invalid')}
              maxLength={50}
            />
            <FormInput
              placeholder={t('contact.input.phone')}
              data-testid="input-phonenumber"
              register={register("phoneNumber", { onBlur: handleInputBlur, validate: validatePhone })}
              error={errors.phoneNumber}
              errorMessage={t('validationErrors.phone.invalid')}
              maxLength={15}
            />
            <FormInput
              placeholder={t('contact.input.email')}
              data-testid="input-email"
              register={register("email", { onBlur: handleInputBlur, validate: validateEmail })}
              error={errors.email}
              errorMessage={t('validationErrors.email.invalid')}
              maxLength={50}
            />
            <Textarea
              bg="#1d1d1d"
              borderRadius="6px"
              color="#ffffffea"
              data-testid="input-textarea"
              fontFamily="'Roboto Mono', monospace"
              maxLength={maxLength}
              placeholder={t('contact.input.message')}
              required
              resize="none"
              size="xl"
              _focusVisible={{ outline: 'solid 1px #459c8c !important', borderColor: "#459c8c" }}
              _placeholder={{ color: '#ffffffea', fontWeight: 300, fontSize: 'sm' }}
              {...register("textarea", {
                validate: validateTextAreaNotEmpty,
                onBlur: handleInputBlur,
                onChange: e => setCharCount(e.target.value.length)
              })}
            />
            <Flex justify="space-between" align="center" mt={2}>
              <Box minW="200px">
                <Text color="red.500" fontSize="sm" opacity={errors.textarea ? 1 : 0}>
                  {t('validationErrors.message.empty')}
                </Text>
              </Box>
              <Text color="gray.500" fontSize="sm">
                {charCount}/{maxLength}
              </Text>
            </Flex>
            <Button
              type="submit"
              borderRadius="50px"
              color="#5ad3bd"
              colorScheme="#333"
              disabled={!isValid}
              gap="5px"
              variant="outline"
              _hover={{ bg: '#459c8c', color: '#333' }}
            >
              {isLoading ? <Spinner size="sm" mr={2} /> : t('contact.input.button')}
            </Button>
            {message && (
              <Text color={message.type === 'success' ? 'green.500' : 'red.500'} fontSize="sm" ml={4}>
                {message.text}
              </Text>
            )}
          </form>
        </Flex>
      </ContactForm>
      <ContactInfo>
        <ContactList data={personalData.data.contact} />
      </ContactInfo>
    </ContactFormContainer>
  );
};

export default ContactComponent;
