import React, { useState } from 'react';
import { Box, Button, Flex, Heading, Spinner, Text, Textarea } from '@chakra-ui/react';
import { ContactForm, ContactFormContainer, ContactInfo } from './styled';
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from './customInput';
import ContactList from './contactList';
import personalData from '../../data/personalData.json';
import emailjs from '@emailjs/browser';
import useFormValidation from '@/utils/validations';
import { useTranslation } from 'react-i18next';

type Inputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  textarea: string;
}

const ContactComponent: React.FC = () => {
  const [charCount, setCharCount] = useState(0);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const maxLength = 1000;
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<Inputs>({
    mode: 'onBlur'
  });

  const { validateEmail, validateNameOrSurname, validatePhone, validateTextAreaNotEmpty } = useFormValidation();

  const onSubmit: SubmitHandler<Inputs> = formData => {
    setIsLoading(true);
    emailjs.send('service_o1b6fuo', 'template_2oqsezt', {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.textarea
    }, '0bWIr1jUN6IgRa1N6')
      .then(response => {
        console.log('Email sent successfully!', response.status, response.text);
        setSuccessMessage(t('contact.feedback.success'));
        reset();
        setIsLoading(false);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 7000);
      }, error => {
        console.log('Failed to send email. Error:', error);
        setErrorMessage(t('contact.feedback.error'));
        setIsLoading(false);
        setTimeout(() => {
          setErrorMessage(null);
        }, 7000);
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              placeholder={t('contact.input.name')}
              register={register("firstName", { validate: validateNameOrSurname })}
              error={errors.firstName}
              errorMessage={t('validationErrors.nameOrSurname.invalid')}
              maxLength={50}
            />
            <FormInput
              placeholder={t('contact.input.lastname')}
              register={register("lastName", { validate: validateNameOrSurname })}
              error={errors.lastName}
              errorMessage={t('validationErrors.nameOrSurname.invalid')}
              maxLength={50}
            />
            <FormInput
              placeholder={t('contact.input.phone')}
              register={register("phoneNumber", { validate: validatePhone })}
              error={errors.phoneNumber}
              errorMessage={t('validationErrors.phone.invalid')}
              maxLength={15}
            />
            <FormInput
              placeholder={t('contact.input.email')}
              register={register("email", { validate: validateEmail })}
              error={errors.email}
              errorMessage={t('validationErrors.email.invalid')}
              maxLength={50}
            />
            <Textarea
              bg="#1d1d1d"
              borderRadius="6px"
              color="#ffffffea"
              fontFamily="'Roboto Mono', monospace"
              maxLength={maxLength}
              placeholder={t('contact.input.message')}
              required
              resize="none"
              size="xl"
              _focusVisible={{
                outline: 'solid 1px #459c8c !important',
                borderColor: "#459c8c"
              }}
              _placeholder={{
                color: '#ffffffea',
                fontWeight: 300,
                fontSize: 'sm'
              }}
              {...register("textarea", {
                validate: validateTextAreaNotEmpty,
                onChange: (e) => setCharCount(e.target.value.length)
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
              {isLoading ? (
                <Spinner size="sm" mr={2} />
              ) : (
                t('contact.input.button')
              )}
            </Button>
            {successMessage && (
              <Text color="green.500" fontSize="sm" ml={4}>
                {successMessage}
              </Text>
            )}
            {errorMessage && (
              <Text color="red.500" fontSize="sm" ml={4}>
                {errorMessage}
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
