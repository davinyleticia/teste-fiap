import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageWithScrollText from './ImageWithScrollText';


jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    return <img {...props} />;
  },
}));


jest.mock('@/components/atomic/', () => ({
  ParallaxText: ({ text }: { text: { text: string; text2: string } }) => (
    <div data-testid="parallax-text">
      {text.text} {text.text2}
    </div>
  ),
}));

describe('ImageWithScrollText', () => {
  const mockProps = {
    src: '/imagem-teste.jpg',
    alt: 'Imagem de teste',
    scrollText: {
      text: 'Texto 1',
      text2: 'Texto 2',
    },
  };

  it('deve renderizar a imagem e o texto com parallax', () => {
    render(<ImageWithScrollText {...mockProps} />);


    const image = screen.getByAltText('Imagem de teste');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.src);


    const parallax = screen.getByTestId('parallax-text');
    expect(parallax).toHaveTextContent('Texto 1');
    expect(parallax).toHaveTextContent('Texto 2');
  });
});
