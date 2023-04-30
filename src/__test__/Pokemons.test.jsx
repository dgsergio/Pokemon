import { render, screen } from '@testing-library/react';
import Pokemons from '../components/Pokemons';
import pokeMocks from '../mocks/pokeMocks';

describe('Pokemons component', () => {
  it('should render a button', async () => {
    render(<Pokemons pokemonList={pokeMocks} />);
    const btnEl = await screen.findAllByRole('button');
    expect(btnEl).not.toHaveLength(0);
  });
});
