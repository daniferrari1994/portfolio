import { render, screen } from '@/utils/renderWithProviders';
import InfoCard from './index';

describe('InfoCard', () => {
  const props = {
    date: 'Jul 2024',
    title: 'Frontend Developer',
    location: 'Buenos Aires, Argentina',
    url: 'https://ejemplo.com',
    description: [
      'Desarrollé componentes reutilizables.',
      'Implementé buenas prácticas de accesibilidad.'
    ]
  };

  it('renderiza todos los datos correctamente', () => {
    render(<InfoCard {...props} />);
    expect(screen.getByText(props.date)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.location)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: props.url })).toHaveAttribute('href', props.url);
    props.description.forEach(desc => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });
  });

  it('renderiza el icono de enlace externo', () => {
    render(<InfoCard {...props} />);
    expect(screen.getByRole('link', { name: props.url }).querySelector('svg')).toBeInTheDocument();
  });
});