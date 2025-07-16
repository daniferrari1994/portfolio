import React, { type ReactElement } from 'react';
import { render, type RenderOptions } from '@testing-library/react';
import { Provider } from "@/components/ui/provider";
import { MemoryRouter } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <MemoryRouter>
      <Provider>{children}</Provider>
    </MemoryRouter>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { customRender as render };