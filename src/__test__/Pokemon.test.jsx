import { render, screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';

describe('Pokemon component', () => {
  it('should render elements', () => {
    render(
      <Pokemon
        image="#"
        name="The name"
        description="The description"
        price="1"
      />
    );
    const imgEl = screen.getByRole('img');
    const headingEl = screen.getByRole('heading', { level: 3 });
    const paragraphEl = screen.getByText(/the description/i);
    expect(imgEl, headingEl, paragraphEl).toBeInTheDocument();
  });
});
