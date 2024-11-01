import { useTranslation } from 'react-i18next';
import validator from 'validator';

const useFormValidation = () => {
  const { t } = useTranslation();

  const validateEmail = (value: string): string | true => {
    const trimmedValue = value.trim();

    if (!validator.isEmail(trimmedValue)) {
      return t('validationErrors.email.invalid');
    }

    if (/\.\./.test(trimmedValue)) {
      return t('validationErrors.email.consecutiveDots');
    }

    const [localPart] = trimmedValue.split('@');
    if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) {
      return t('validationErrors.email.invalidCharacters');
    }

    return true;
  };

  const validateNameOrSurname = (value: string): string | true => {
    const regex = /^[a-zA-ZÀ-ÿ., ]+$/;

    if (!/[A-Za-zÀ-ÿ]/.test(value)) {
      return t('validationErrors.nameOrSurname.invalid');
    }

    if (value.length < 2 || value.length > 50) {
      return t('validationErrors.nameOrSurname.length');
    }

    return regex.test(value) ? true : t('validationErrors.nameOrSurname.invalid');
  };

  const validatePhone = (value: string): string | true => {
    const phoneRegex = /^[\d+]+$/;

    if (!/[0-9]/.test(value)) {
      return t('validationErrors.phone.invalid');
    }

    if (value.length < 3 || value.length > 15) {
      return t('validationErrors.phone.length');
    }
    return phoneRegex.test(value) ? true : t('validationErrors.phone.invalid');
  };

  const validateTextAreaNotEmpty = (value: string): string | true => {
    if (!value.trim()) {
      return t('validationErrors.message.empty');
    }
    return true;
  };

  return {
    validateEmail,
    validateNameOrSurname,
    validatePhone,
    validateTextAreaNotEmpty
  };
};

export default useFormValidation;
