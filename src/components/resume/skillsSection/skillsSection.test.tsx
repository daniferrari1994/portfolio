import { render, screen } from '@/utils/renderWithProviders';
import SkillsSection from './index';

jest.mock('@/components/ui/tooltip', () => ({
  Tooltip: ({ content, children }: { content: React.ReactNode; children?: React.ReactNode }) => (
    <>
      <span>{content}</span>
      {children}
    </>
  ),
}));

describe('SkillsSection', () => {
  it('renderiza los títulos de las categorías', () => {
    render(<SkillsSection />);
    expect(screen.getByText('Frontend development')).toBeInTheDocument();
    expect(screen.getByText('Backend development and tools')).toBeInTheDocument();
    expect(screen.getByText('Design')).toBeInTheDocument();
    expect(screen.getByText('Version control')).toBeInTheDocument();
    expect(screen.getByText('Project management')).toBeInTheDocument();
  });

  it('renderiza los nombres de las skills', () => {
    render(<SkillsSection />);
    [
      'HTML5', 'CSS3', 'JavaScript', 'React', 'Sass',
      'Node.js', 'Npm', 'Figma', 'Git', 'Gitlab', 'Jira'
    ].forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('renderiza los botones de skills', () => {
    render(<SkillsSection />);
    expect(screen.getAllByRole('button')).toHaveLength(11);
  });
});