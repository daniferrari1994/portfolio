import React from 'react';
import { render } from '@/utils/renderWithProviders';
import Menu from '.';

describe('Menu', () => {
  it('renderiza los enlaces principales', () => {
    const { getByLabelText } = render(<Menu />);
    expect(getByLabelText('Home')).toBeInTheDocument();
    expect(getByLabelText('Resume')).toBeInTheDocument();
    expect(getByLabelText('Work')).toBeInTheDocument();
  });

  it('muestra el botón "Contact me"', () => {
    const { getByText } = render(<Menu />);
    expect(getByText('Contact me')).toBeInTheDocument();
  });

  it('incluye el componente LanguageSwitcher', () => {
    const { container } = render(<Menu />);
    const switchInput = container.querySelector('input[type="checkbox"]');
    expect(switchInput).toBeInTheDocument();
  });
});