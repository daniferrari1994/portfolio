import { render, screen, waitFor } from '@/utils/renderWithProviders';
import React from 'react';
import ExperienceStats from '.';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe('ExperienceStats', () => {
  it('renderiza los 4 counters con sus títulos', () => {
    render(<ExperienceStats />);
    expect(screen.getAllByTestId('counter')).toHaveLength(4);
    expect(screen.getByText('counters.yearsOfExperience')).toBeInTheDocument();
    expect(screen.getByText('counters.experience')).toBeInTheDocument();
    expect(screen.getByText('counters.projects')).toBeInTheDocument();
    expect(screen.getByText('counters.completed')).toBeInTheDocument();
    expect(screen.getByText('counters.technologies')).toBeInTheDocument();
    expect(screen.getByText('counters.mastered')).toBeInTheDocument();
    expect(screen.getByText('counters.commits')).toBeInTheDocument();
    expect(screen.getByText('counters.commitsTitle')).toBeInTheDocument();
  });

  it('incrementa el número progresivamente hasta el target', async () => {
    render(<ExperienceStats />);

    expect(screen.getAllByText('0')).toHaveLength(4);

    await waitFor(() => {
      expect(screen.getByText('4')).toBeInTheDocument();
    }, { timeout: 3000 });
  });

  it('Counter muestra el número final correctamente', async () => {
    const { getByTestId } = render(
      <ExperienceStats />
    );
    await waitFor(() => {
      expect(screen.getByText('4')).toBeInTheDocument();
      expect(screen.getByText('3')).toBeInTheDocument();
      expect(screen.getByText('6')).toBeInTheDocument();
      expect(screen.getByText('2000')).toBeInTheDocument();
    }, { timeout: 3000 });
  });
});
