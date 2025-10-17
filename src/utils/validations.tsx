import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const useFormValidation = () => {
  const { t } = useTranslation();

  // Función auxiliar para validar email sin dependencias externas
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email) && 
           email.length <= 254 && // RFC 5321 limit
           !email.includes('..') && // No consecutive dots
           !email.startsWith('.') && // No leading dot
           !email.endsWith('.'); // No trailing dot
  };

  const validationFunctions = useMemo(() => {
    const validateEmail = (value: string): string | true => {
      const trimmedValue = value.trim();
      
      if (/\.\./.test(trimmedValue)) {
        return t('validationErrors.email.consecutiveDots');
      }

      if (!isValidEmail(trimmedValue)) {
        return t('validationErrors.email.invalid');
      }

      const [localPart] = trimmedValue.split('@');
      if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) {
        return t('validationErrors.email.invalidCharacters');
      }

      return true;
    };

    const validateNameOrSurname = (value: string): string | true => {
      const trimmedValue = value.trim().replace(/\s{2,}/g, ' ');
      const regex = /^[a-zA-ZÀ-ÿ., ]+$/;

    if (!/[A-Za-zÀ-ÿ]/.test(trimmedValue)) {
      return t('validationErrors.nameOrSurname.invalid');
    }

    if (trimmedValue.length < 2 || trimmedValue.length > 50) {
      return t('validationErrors.nameOrSurname.length');
    }

    return regex.test(trimmedValue) ? true : t('validationErrors.nameOrSurname.invalid');
  };

  const validatePhone = (value: string): string | true => {
    const trimmedValue = value.trim().replace(/\s{2,}/g, '');
    const phoneRegex = /^[\d+]+$/;

    if (!/[0-9]/.test(trimmedValue)) {
      return t('validationErrors.phone.invalid');
    }

    if (trimmedValue.length < 3 || trimmedValue.length > 15) {
      return t('validationErrors.phone.length');
    }

    return phoneRegex.test(trimmedValue) ? true : t('validationErrors.phone.invalid');
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
      validateTextAreaNotEmpty,
    };
  }, [t]);

  return validationFunctions;
};

export default useFormValidation;
