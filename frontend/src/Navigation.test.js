import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './components/Navigation';

test('renders all navigation buttons', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  );
  expect(screen.getByRole('button', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Service Orders/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Quotes/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Inventory/i })).toBeInTheDocument();
});
