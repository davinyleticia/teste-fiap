import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeaderTitle from './HeaderTitle';

describe('HeaderTitle', () => {
  it('rederizar o children passando o texto', () => {
    render(<HeaderTitle>Test Text</HeaderTitle>);
    
    const heading = screen.getByRole('heading', { level: 1 });
    
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Test Text');
    expect(heading).toHaveClass('title');
  });
});