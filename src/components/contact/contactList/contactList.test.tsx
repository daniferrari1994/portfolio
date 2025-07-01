import React from 'react';
import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from "@/components/ui/provider"
import '@testing-library/jest-dom';
import i18n from '@/i18nForTest';
import ContactList from '.';

const mockData = {
  address: '123 Calle Falsa, Buenos Aires',
  email: 'dan@ferrari.dev',
  phone: '+54 11 1234-5678',
};

describe('ContactList component', () => {
  it('debe renderizar correctamente los elementos', () => {
    render(
      <Provider>
        <I18nextProvider i18n={i18n}>
          <ContactList data={mockData} />
        </I18nextProvider>
      </Provider>
    );

    const container = screen.getByTestId('flex-container');
    expect(container).toBeInTheDocument();

    expect(screen.getByText(mockData.address)).toBeInTheDocument();
    expect(screen.getByText(mockData.email)).toBeInTheDocument();
    expect(screen.getByText(mockData.phone)).toBeInTheDocument();

    expect(screen.getAllByTestId('box-container').length).toBe(3);
    expect(screen.getAllByTestId('aboutMe-container').length).toBe(3);
    expect(screen.getAllByTestId('aboutMe-data').length).toBe(3);
    expect(screen.getAllByTestId('aboutMe-text').length).toBe(3);
  });
});
