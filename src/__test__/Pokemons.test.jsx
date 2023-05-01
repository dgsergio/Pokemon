import { render, screen } from '@testing-library/react';
import Pokemons from '../components/Pokemons';
import pokeMocks from '../mocks/pokeMocks';
import user from '@testing-library/user-event';

describe('Pokemons component', () => {
  beforeEach(() => {
    render(<Pokemons pokemonList={pokeMocks} />);
  });

  it('should render a button', async () => {
    const btnEl = await screen.findAllByRole('button');
    expect(btnEl).not.toHaveLength(0);
  });

  it('should clear the cart button', async () => {
    const cartButtonEl = screen.getByTitle(/Clic para vaciar items/i);
    const addIdOneBtn = screen.getByTestId('1');
    await user.click(addIdOneBtn);
    expect(cartButtonEl).toHaveTextContent(/1 items - \$1/i);
    await user.click(cartButtonEl);
    expect(cartButtonEl).toHaveTextContent(/0 items - \$0/i);
  });

  it('throw an error when more than 10 items', async () => {
    const cartButtonEl = screen.getByTitle(/Clic para vaciar items/i);
    const addIdOneBtn = screen.getByTestId('1');
    for (let i = 0; i < 11; i++) {
      await user.click(addIdOneBtn);
    }
    expect(cartButtonEl).toHaveTextContent(/10 items - \$1/i);
    const errorEl = screen.getByText(/No puedes comprar más de 10 items/i);
    expect(errorEl).toBeInTheDocument();
  });

  it('throw an error when more than $999', async () => {
    const cartButtonEl = screen.getByTitle(/Clic para vaciar items/i);
    const addIdOneBtn = screen.getByTestId('133');
    for (let i = 0; i < 8; i++) {
      await user.click(addIdOneBtn);
    }
    expect(cartButtonEl).toHaveTextContent(/7 items - \$931/);
    const errorEl = screen.getByText(/limite de compra es \$1000/i);
    expect(errorEl).toBeInTheDocument();
  });
});
