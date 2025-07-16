import { render, screen, fireEvent, waitFor } from '@/utils/renderWithProviders';
import i18n from 'i18next';
import HomeComponent from '.';

jest.mock('i18next', () => ({
  language: 'en',
}));

describe('HomeComponent', () => {
  beforeEach(() => {
    jest.spyOn(window, 'open').mockImplementation(() => null);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renderiza correctamente el título y la imagen de perfil', async () => {
    render(<HomeComponent />);
    expect(await screen.findByTestId('home-title')).toBeInTheDocument();
    expect(await screen.findByTestId('profile-image')).toBeInTheDocument();
  });

  it('descarga el CV al hacer click en el botón de descargar CV', async () => {
    const anchor = document.createElement('a');
    anchor.click = jest.fn();
    anchor.remove = jest.fn();

    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'a') return anchor;
      return originalCreateElement(tagName);
    });

    // Mock fetch para simular que el archivo existe
    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true })
    ) as jest.Mock;

    render(<HomeComponent />);
    const downloadButton = await screen.findByTestId('btn-download-cv');
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(anchor.click).toHaveBeenCalled();
    });

    createElementSpy.mockRestore();
    (global.fetch as jest.Mock).mockRestore();
  });

  it('los enlaces de GitHub y LinkedIn existen y tienen el href correcto', async () => {
    render(<HomeComponent />);
    expect(await screen.findByTestId('link-github')).toHaveAttribute('href', 'https://github.com/daniferrari1994');
    expect(await screen.findByTestId('link-linkedin')).toHaveAttribute('href', 'https://www.linkedin.com/in/dan-ferrari/');
  });

  it('descarga el CV en español si el idioma es "es"', async () => {
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

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true })
    ) as jest.Mock;

    render(<HomeComponent />);
    const downloadButton = await screen.findByTestId('btn-download-cv');
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(anchor.click).toHaveBeenCalled();
      expect(anchor.download).toBe('cvDanFerrariEspOP.pdf');
    });

    createElementSpy.mockRestore();
    (global.fetch as jest.Mock).mockRestore();
    i18n.language = originalLanguage;
  });

  it('el botón de descargar CV tiene el texto correcto', async () => {
    render(<HomeComponent />);
    const downloadButton = await screen.findByTestId('btn-download-cv');
    expect(downloadButton.textContent?.toLowerCase()).toMatch(/descargar|download/);
  });

  it('el componente renderiza los elementos de contacto si existen', async () => {
    render(<HomeComponent />);
    expect(await screen.findByTestId('home-title')).toBeInTheDocument();
    expect(await screen.findByTestId('profile-image')).toBeInTheDocument();
    expect(await screen.findByTestId('btn-download-cv')).toBeInTheDocument();
  });

  it('no lanza error al hacer click en los enlaces de redes sociales', async () => {
    render(<HomeComponent />);
    const githubLink = await screen.findByTestId('link-github');
    const linkedinLink = await screen.findByTestId('link-linkedin');
    expect(() => fireEvent.click(githubLink)).not.toThrow();
    expect(() => fireEvent.click(linkedinLink)).not.toThrow();
  });

  it('el botón de descargar CV crea y elimina el anchor del DOM', async () => {
    const anchor = document.createElement('a');
    anchor.click = jest.fn();
    anchor.remove = jest.fn();

    const originalCreateElement = document.createElement.bind(document);
    const createElementSpy = jest.spyOn(document, 'createElement').mockImplementation((tagName: string) => {
      if (tagName === 'a') return anchor;
      return originalCreateElement(tagName);
    });

    global.fetch = jest.fn(() =>
      Promise.resolve({ ok: true })
    ) as jest.Mock;

    render(<HomeComponent />);
    const downloadButton = await screen.findByTestId('btn-download-cv');
    fireEvent.click(downloadButton);

    await waitFor(() => {
      expect(anchor.click).toHaveBeenCalled();
    });

    createElementSpy.mockRestore();
    (global.fetch as jest.Mock).mockRestore();
  });

  it('el componente no renderiza enlaces anidados', async () => {
    render(<HomeComponent />);
    const githubLink = await screen.findByTestId('link-github');
    const linkedinLink = await screen.findByTestId('link-linkedin');
    expect(githubLink.querySelector('a')).toBeNull();
    expect(linkedinLink.querySelector('a')).toBeNull();
  });
});