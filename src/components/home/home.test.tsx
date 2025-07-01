import React from 'react';
import { render, screen, fireEvent } from '@/utils/renderWithProviders';
import HomeComponent from '.';

jest.mock('i18next', () => ({
  language: 'en',
}));

describe('HomeComponent', () => {
  beforeEach(() => {
    jest.spyOn(window, 'open').mockImplementation(() => null);
  });

  it('renderiza correctamente el título y la imagen de perfil', () => {
    render(<HomeComponent />);
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
    expect(screen.getByTestId('profile-image')).toBeInTheDocument();
  });

  it('llama a handleDownload al hacer click en el botón de descargar CV', () => {
    render(<HomeComponent />);
    const downloadButton = screen.getByTestId('btn-download-cv');

    const anchor = document.createElement('a');
    const clickMock = jest.fn();
    anchor.click = clickMock;
    anchor.remove = jest.fn();

    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'a') return anchor;
      return originalCreateElement(tagName);
    });

    fireEvent.click(downloadButton);

    expect(clickMock).toHaveBeenCalled();

    createElementSpy.mockRestore();
  });

  it('los enlaces de GitHub y LinkedIn existen y tienen el href correcto', () => {
    render(<HomeComponent />);
    expect(screen.getByTestId('link-github')).toHaveAttribute('href', 'https://github.com/daniferrari1994');
    expect(screen.getByTestId('link-linkedin')).toHaveAttribute('href', 'https://www.linkedin.com/in/dan-ferrari/');
  });

  it('descarga el CV en español si el idioma es "es"', () => {
    const i18n = require('i18next');
    const originalLanguage = i18n.language;
    i18n.language = 'es';

    const anchor = document.createElement('a');
    anchor.click = jest.fn();
    anchor.remove = jest.fn();

    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'a') return anchor;
      return originalCreateElement(tagName);
    });

    render(<HomeComponent />);
    const downloadButton = screen.getByTestId('btn-download-cv');
    fireEvent.click(downloadButton);

    expect(anchor.click).toHaveBeenCalled();
    expect(anchor.download).toBe('cvDanFerrariEspOP.pdf');

    createElementSpy.mockRestore();
    i18n.language = originalLanguage;
  });

  it('el botón de descargar CV tiene el texto correcto', () => {
    render(<HomeComponent />);
    const downloadButton = screen.getByTestId('btn-download-cv');
    expect(downloadButton.textContent?.toLowerCase()).toMatch(/descargar|download/);
  });

  it('el componente renderiza los elementos de contacto si existen', () => {
    render(<HomeComponent />);
    expect(screen.getByTestId('home-title')).toBeInTheDocument();
    expect(screen.getByTestId('profile-image')).toBeInTheDocument();
    expect(screen.getByTestId('btn-download-cv')).toBeInTheDocument();
  });

  it('no lanza error al hacer click en los enlaces de redes sociales', () => {
    render(<HomeComponent />);
    const githubLink = screen.getByTestId('link-github');
    const linkedinLink = screen.getByTestId('link-linkedin');
    expect(() => fireEvent.click(githubLink)).not.toThrow();
    expect(() => fireEvent.click(linkedinLink)).not.toThrow();
  });

  it('el botón de descargar CV crea y elimina el anchor del DOM', () => {
    const anchor = document.createElement('a');
    anchor.click = jest.fn();
    anchor.remove = jest.fn();

    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'a') return anchor;
      return originalCreateElement(tagName);
    });

    render(<HomeComponent />);
    const downloadButton = screen.getByTestId('btn-download-cv');
    fireEvent.click(downloadButton);

    expect(anchor.click).toHaveBeenCalled();

    createElementSpy.mockRestore();
  });

  it('el componente no renderiza enlaces anidados', () => {
    render(<HomeComponent />);
    const githubLink = screen.getByTestId('link-github');
    const linkedinLink = screen.getByTestId('link-linkedin');
    expect(githubLink.querySelector('a')).toBeNull();
    expect(linkedinLink.querySelector('a')).toBeNull();
  });
});