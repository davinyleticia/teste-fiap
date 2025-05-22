import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackgroundTitle from './BackgroundTitle';

describe('BackgroundTitle', () => {
  it('renderiza o texto passado como filho', () => {
    render(<BackgroundTitle>Texto de Teste</BackgroundTitle>);
    
    const heading = screen.getByRole('heading', { level: 2 });
    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Texto de Teste');
    expect(heading).toHaveClass('backgroundTitle');
  });
});
