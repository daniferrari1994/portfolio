import React from 'react';
import { render, fireEvent } from '@/utils/renderWithProviders';
import LanguageSwitcher from '.';
const i18next = require('i18next');

jest.mock('i18next', () => ({
  changeLanguage: jest.fn(),
}));

describe('LanguageSwitcher', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('calls changeLanguage with "es" when switching from English', () => {
    const { getByRole } = render(<LanguageSwitcher />);
    const switchInput = getByRole('checkbox');
    
    expect(switchInput).not.toBeChecked();
    
    fireEvent.click(switchInput);
    
    expect(i18next.changeLanguage).toHaveBeenCalledWith('es');
    expect(switchInput).toBeChecked();
  });

  it('calls changeLanguage with "en" when switching from Spanish', () => {
    const { getByRole } = render(<LanguageSwitcher />);
    const switchInput = getByRole('checkbox');

    fireEvent.click(switchInput);
    fireEvent.click(switchInput);
    
    expect(i18next.changeLanguage).toHaveBeenLastCalledWith('en');
    expect(switchInput).not.toBeChecked();
  });
});