import { render, screen, act } from '@testing-library/react';
import App from '../components/App';

describe('App component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render title', () => {
    const titleEl = screen.getByRole('heading', { level: 1 });
    expect(titleEl).toBeInTheDocument();
  });

  it('should render h3 pokemons titles, e2e', async () => {
    await act(async () => render(<App />));
    const titlePokemonEl = await screen.findAllByRole('heading', { level: 3 });
    expect(titlePokemonEl).not.toHaveLength(0);
  });
});
