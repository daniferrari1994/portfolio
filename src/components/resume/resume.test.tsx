import React from 'react';
import { render, screen, fireEvent } from '@/utils/renderWithProviders';
import ResumeComponent from './index';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      // Puedes expandir este objeto según lo que uses en el componente
      const translations: Record<string, string> = {
        'aboutMe.title': 'About me',
        'aboutMe.data.aboutMeValues.John Doe': 'John Doe',
        'aboutMe.data.aboutMeValues.john@email.com': 'john@email.com',
        // agrega aquí otras keys si es necesario
      };
      return translations[key] || key;
    },
    i18n: { language: 'en' }
  }),
}));

jest.mock('../../data/personalData.json', () => ({
  data: { aboutMe: { name: 'John Doe', email: 'john@email.com' } }
}));
jest.mock('../../data/resume.json', () => ({
  resume: {
    experience: [
      {
        id: 1,
        company: 'Empresa',
        url: 'https://empresa.com',
        translations: {
          en: { date: '2020', title: 'Dev', description: ['Trabajé en X'] }
        }
      }
    ],
    education: [
      {
        id: 1,
        institute: 'Universidad',
        url: 'https://universidad.com',
        date: '2018',
        translations: {
          en: { title: 'Licenciatura', description: ['Estudié Y'] }
        }
      }
    ]
  }
}));

describe('ResumeComponent', () => {
  it('muestra la sección de experiencia por defecto', () => {
    render(<ResumeComponent />);
    // Título de la sección
    expect(screen.getByRole('heading', { name: 'experience.title' })).toBeInTheDocument();
    // Botón de navegación
    expect(screen.getByRole('button', { name: 'experience.title' })).toBeInTheDocument();
    expect(screen.getByText('Empresa')).toBeInTheDocument();
    expect(screen.getByText('Dev')).toBeInTheDocument();
    expect(screen.getByText('Trabajé en X')).toBeInTheDocument();
  });

  it('cambia a la sección de educación al hacer click', () => {
    render(<ResumeComponent />);
    fireEvent.click(screen.getByRole('button', { name: 'education.title' }));
    expect(screen.getByRole('heading', { name: 'education.title' })).toBeInTheDocument();
    expect(screen.getByText('Universidad')).toBeInTheDocument();
    expect(screen.getByText('Licenciatura')).toBeInTheDocument();
    expect(screen.getByText('Estudié Y')).toBeInTheDocument();
  });

  it('cambia a la sección de skills al hacer click', () => {
    render(<ResumeComponent />);
    fireEvent.click(screen.getByRole('button', { name: 'skills.title' }));
    expect(screen.getByRole('heading', { name: 'skills.title' })).toBeInTheDocument();
  });

  it('cambia a la sección About me al hacer click', () => {
    render(<ResumeComponent />);
    fireEvent.click(screen.getByRole('button', { name: 'About me' }));
    expect(screen.getByRole('heading', { name: 'About me' })).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@email.com')).toBeInTheDocument();
  });
});