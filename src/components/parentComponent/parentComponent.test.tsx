import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ParentComponent } from '.';
import { Provider } from '../ui/provider';

jest.mock('../contact/index', () => {
  const MockContact = () => <div>Mock Contact</div>;
  MockContact.displayName = 'MockContact';
  return MockContact;
});
jest.mock('../home', () => {
  const MockHome = () => <div>Mock Home</div>;
  MockHome.displayName = 'MockHome';
  return MockHome;
});
jest.mock('../projects', () => {
  const MockProjects = () => <div>Mock Projects</div>;
  MockProjects.displayName = 'MockProjects';
  return MockProjects;
});
jest.mock('../resume', () => {
  const MockResume = () => <div>Mock Resume</div>;
  MockResume.displayName = 'MockResume';
  return MockResume;
});
jest.mock('../background/vantaBackground', () => {
  const MockVantaBackground = () => <div>Mock VantaBackground</div>;
  MockVantaBackground.displayName = 'MockVantaBackground';
  return MockVantaBackground;
});

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