import { render, screen, fireEvent } from '@/utils/renderWithProviders';
import WorkProjects from '.';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span>Icon</span>
}));

jest.mock('@/components/ui/tooltip', () => ({
  Tooltip: ({ children }: React.PropsWithChildren) => <>{children}</>
}));

jest.mock('../../data/projects.json', () => ({
  projects: [
    {
      id: '1',
      translations: {
        en: { title: 'Project One', description: 'Description One' },
        es: { title: 'Proyecto Uno', description: 'Descripción Uno' }
      },
      technologies: ['React', 'TypeScript'],
      url: 'https://live.com',
      codeUrl: 'https://github.com',
      image: 'image1.jpg'
    },
    {
      id: '2',
      translations: {
        en: { title: 'Project Two', description: 'Description Two' },
        es: { title: 'Proyecto Dos', description: 'Descripción Dos' }
      },
      technologies: ['Node', 'Express'],
      url: 'https://live2.com',
      codeUrl: 'https://github.com/2',
      image: 'image2.jpg'
    }
  ]
}));

describe('WorkProjects', () => {
  it('renderiza el título, descripción y tecnologías del primer proyecto', () => {
    render(<WorkProjects />);
    expect(screen.getByText('Project One')).toBeInTheDocument();
    expect(screen.getByText('Description One')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('cambia al siguiente proyecto al hacer click en "Next project"', () => {
    render(<WorkProjects />);
    fireEvent.click(screen.getByLabelText('Next project'));
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
    expect(screen.getByText('Node')).toBeInTheDocument();
    expect(screen.getByText('Express')).toBeInTheDocument();
  });

  it('cambia al proyecto anterior al hacer click en "Previous project"', () => {
    render(<WorkProjects />);
    fireEvent.click(screen.getByLabelText('Previous project'));
    expect(screen.getByText('Project Two')).toBeInTheDocument();
    expect(screen.getByText('Description Two')).toBeInTheDocument();
  });

  it('los botones de links tienen los atributos correctos', () => {
    render(<WorkProjects />);
    expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', 'https://live.com');
    expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', 'https://github.com');
  });
});