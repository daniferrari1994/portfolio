import { render, screen } from '@/utils/renderWithProviders';
import DataContactList from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translations: Record<string, string> = {
        'aboutMe.data.aboutMe.name': 'Nombre',
        'aboutMe.data.aboutMe.email': 'Correo',
        'aboutMe.data.aboutMe.languages': 'Idiomas',
        'aboutMe.data.aboutMeValues.english': 'Inglés',
        'aboutMe.data.aboutMeValues.spanish': 'Español',
        'aboutMe.data.aboutMeValues.john': 'John',
        'aboutMe.data.aboutMeValues.john@email.com': 'john@email.com',
      };
      return translations[key] || key;
    }
  })
}));

describe('DataContactList', () => {
  it('muestra los datos simples correctamente', () => {
    const data = {
      name: 'john',
      email: 'john@email.com'
    };
    render(<DataContactList data={data} />);
    expect(screen.getByText('Nombre:')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Correo:')).toBeInTheDocument();
    expect(screen.getByText('john@email.com')).toBeInTheDocument();
  })});