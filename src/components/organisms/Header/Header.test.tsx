import { render, screen } from '@testing-library/react';
import data from "../../../data/header.data.json";
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
  render(<Header data={data}/>);

  expect(screen.getByText(/SOBRE/i)).toBeInTheDocument();
  expect(screen.getByText(/A Melhor Faculdade/i)).toBeInTheDocument();
  expect(screen.getByText(/de Tecnologia/i)).toBeInTheDocument();
});


