import { render, screen } from '@testing-library/react';
import App from '../components/App';

it('should render title', () => {
  render(<App />);
  const titleEl = screen.getByRole('heading', { level: 1 });
  expect(titleEl).toBeInTheDocument();
});
