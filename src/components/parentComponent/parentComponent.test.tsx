import React from 'react';
import { render, screen } from '@testing-library/react';
import { ParentComponent } from '.';
import { Provider } from '../ui/provider';

jest.mock('../contact/index', () => () => <div>Mock Contact</div>);
jest.mock('../home', () => () => <div>Mock Home</div>);
jest.mock('../projects', () => () => <div>Mock Projects</div>);
jest.mock('../resume', () => () => <div>Mock Resume</div>);
jest.mock('../background/vantaBackground', () => () => <div>Mock VantaBackground</div>);

describe('ParentComponent', () => {
  it('renderiza el menú y el fondo', async () => {
    render(
      <Provider>
        <ParentComponent />
      </Provider>
    );
    expect(await screen.findByText('Mock VantaBackground')).toBeInTheDocument();
  });

  it('renderiza el componente Home por defecto', async () => {
    render(
      <Provider>
        <ParentComponent />
      </Provider>
    );
    expect(await screen.findByText('Mock Home')).toBeInTheDocument();
  });
});