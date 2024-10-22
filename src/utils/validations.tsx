import validator from 'validator';

export const validateEmail = (value: string): string | null => {
  const trimmedValue = value.trim();

  if (!validator.isEmail(trimmedValue)) {
    return 'Ingrese un email válido.';
  }

  if (/\.\./.test(trimmedValue)) {
    return 'Ingrese un email válido.';
  }

  const [localPart] = trimmedValue.split('@');
  if (!/^[a-zA-Z0-9._-]+$/.test(localPart)) {
    return 'Ingrese un email válido.';
  }

  return null;
};

export const validateNameOrSurname = (value: string): string | null => {
  const regex = /^[a-zA-ZÀ-ÿ., ]+$/;

  if (!/[A-Za-zÀ-ÿ]/.test(value)) {
    return 'Ingrese un dato valido.';
  }

  if (value.length < 2 || value.length > 50) {
    return 'Ingrese de 2 a 50 digitos.';
  }

  return regex.test(value) ? null : 'Ingrese un dato valido.';
};

export const validatePhone = (value: string): string | null => {
  const phoneRegex = /^[\d+]+$/;

  if (!/[0-9]/.test(value)) {
    return 'Ingrese un número valido.';
  }

  if (value.length < 3 || value.length > 15) {
    return 'Ingrese de 3 a 50 digitos.';
  }
  return phoneRegex.test(value) ? null : 'Ingrese un número valido.';
};

export const validateTextAreaNotEmpty = (value: string): string | null => {
  if (!value.trim()) {
    return 'El mensaje no puede estar vacío.';
  }
  return null;
};
