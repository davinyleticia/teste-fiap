import React, { HTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';
import MarqueeText from './MarqueeText';

type Props = {
  text: string;
  text2: string;
};

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: HTMLAttributes<HTMLDivElement>) => <div {...rest}>{children}</div>,
  }
}));

describe("MarqueeText", () => {
  const mockText : Props = {
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
