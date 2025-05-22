import { render, screen } from '@testing-library/react';
import Header from './Header';

beforeAll(() => {
  Object.defineProperty(document, 'fonts', {
    value: {
      ready: Promise.resolve(),
    },
    writable: true,
  });
});

test('Header renders HeaderTitle and BackgroundTitle components', () => {
  render(<Header />);

  expect(screen.getByText(/SOBRE/i)).toBeInTheDocument();
  expect(screen.getByText(/A Melhor Faculdade/i)).toBeInTheDocument();
  expect(screen.getByText(/de Tecnologia/i)).toBeInTheDocument();
});


