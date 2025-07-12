import useFormValidation from './validations';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('useFormValidation', () => {
  const {
    validateEmail,
    validateNameOrSurname,
    validatePhone,
    validateTextAreaNotEmpty,
  } = useFormValidation();

  describe('validateEmail', () => {
    it('devuelve error si el email es inválido', () => {
      expect(validateEmail('noemail')).toBe('validationErrors.email.invalid');
    });
    it('devuelve error si hay puntos consecutivos', () => {
      expect(validateEmail('test..mail@mail.com')).toBe('validationErrors.email.consecutiveDots');
    });
    it('devuelve error si hay caracteres inválidos', () => {
      expect(validateEmail('te!st@mail.com')).toBe('validationErrors.email.invalidCharacters');
    });
    it('devuelve true si el email es válido', () => {
      expect(validateEmail('test@mail.com')).toBe(true);
    });
  });

  describe('validateNameOrSurname', () => {
    it('devuelve error si no hay letras', () => {
      expect(validateNameOrSurname('1234')).toBe('validationErrors.nameOrSurname.invalid');
    });
    it('devuelve error si es muy corto', () => {
      expect(validateNameOrSurname('A')).toBe('validationErrors.nameOrSurname.length');
    });
    it('devuelve error si es muy largo', () => {
      expect(validateNameOrSurname('A'.repeat(51))).toBe('validationErrors.nameOrSurname.length');
    });
    it('devuelve true si es válido', () => {
      expect(validateNameOrSurname('Juan Pérez')).toBe(true);
    });
  });

  describe('validatePhone', () => {
    it('devuelve error si no hay números', () => {
      expect(validatePhone('abc')).toBe('validationErrors.phone.invalid');
    });
    it('devuelve error si es muy corto', () => {
      expect(validatePhone('12')).toBe('validationErrors.phone.length');
    });
    it('devuelve error si es muy largo', () => {
      expect(validatePhone('1'.repeat(16))).toBe('validationErrors.phone.length');
    });
    it('devuelve true si es válido', () => {
      expect(validatePhone('+5491122334455')).toBe(true);
    });
  });

  describe('validateTextAreaNotEmpty', () => {
    it('devuelve error si está vacío', () => {
      expect(validateTextAreaNotEmpty('   ')).toBe('validationErrors.message.empty');
    });
    it('devuelve true si tiene texto', () => {
      expect(validateTextAreaNotEmpty('Hola!')).toBe(true);
    });
  });
});