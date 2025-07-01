import React from 'react';
import { render, screen, fireEvent, waitFor } from '@/utils/renderWithProviders';
import '@testing-library/jest-dom';
import emailjs from '@emailjs/browser';
import ContactComponent from '.';

jest.mock('@emailjs/browser');

jest.mock('@/utils/validations', () => () => ({
  validateEmail: () => true,
  validateNameOrSurname: () => true,
  validatePhone: () => true,
  validateTextAreaNotEmpty: () => true,
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock('@/i18n', () => ({
  language: 'en',
}));

describe('ContactComponent', () => {
  let consoleErrorSpy: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renderiza todos los inputs y botón', async () => {
    render(<ContactComponent />);
    await waitFor(() => expect(screen.getByPlaceholderText('contact.input.name')).toBeInTheDocument());

    expect(screen.getByPlaceholderText('contact.input.lastname')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('contact.input.phone')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('contact.input.email')).toBeInTheDocument();
    expect(screen.getByTestId('input-textarea')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('muestra spinner y mensaje de éxito al enviar el formulario', async () => {
    (emailjs.send as jest.Mock).mockResolvedValueOnce({});

    render(<ContactComponent />);
    await waitFor(() => expect(screen.getByPlaceholderText('contact.input.name')).toBeInTheDocument());

    fireEvent.change(screen.getByPlaceholderText('contact.input.name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('contact.input.lastname'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('contact.input.phone'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByPlaceholderText('contact.input.email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('input-textarea'), { target: { value: 'Hello world!' } });

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/contact.feedback.success/i)).toBeInTheDocument();
    });
  });

  it('muestra mensaje de error si el envío falla', async () => {
    (emailjs.send as jest.Mock).mockRejectedValueOnce(new Error('Error'));

    render(<ContactComponent />);
    await waitFor(() => expect(screen.getByPlaceholderText('contact.input.name')).toBeInTheDocument());

    fireEvent.change(screen.getByPlaceholderText('contact.input.name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('contact.input.lastname'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('contact.input.phone'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByPlaceholderText('contact.input.email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByTestId('input-textarea'), { target: { value: 'Hello world!' } });

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/contact.feedback.error/i)).toBeInTheDocument();
    });
  });

  it('muestra mensaje de error si el textarea está vacío y pierde el foco', async () => {
    render(<ContactComponent />);
    await waitFor(() => expect(screen.getByPlaceholderText('contact.input.name')).toBeInTheDocument());

    const textarea = screen.getByTestId('input-textarea');
    fireEvent.blur(textarea);

    expect(screen.getByText('validationErrors.message.empty')).toBeInTheDocument();
  });
});