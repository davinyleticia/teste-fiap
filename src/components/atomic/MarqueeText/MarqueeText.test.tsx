import { render, screen } from '@testing-library/react';
import MarqueeText from './MarqueeText';

// Mock 
jest.mock('framer-motion', () => {
  const React = require('react');
  return {
    motion: {
      div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
    }
  };
});

describe("MarqueeText", () => {
  const mockText = {
    text: "Texto principal",
    text2: "Texto reverso"
  };

  it("deve renderizar os textos corretamente nas faixas", () => {
    render(<MarqueeText text={mockText} />);

    const spansText = screen.getAllByText(/Texto principal/);
    expect(spansText.length).toBeGreaterThanOrEqual(2); 

    const spansText2 = screen.getAllByText(/Texto reverso/);
    expect(spansText2.length).toBeGreaterThanOrEqual(2);
  });
});
