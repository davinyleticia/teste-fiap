// components/molecules/HeaderView/HeaderView.test.tsx
import { render, screen } from '@testing-library/react';
import HeaderView from './HeaderView';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}));

describe('HeaderView', () => {
  it('renderiza o logotipo e a barra de progresso com a largura correta', () => {
    render(<HeaderView scrollProgress={50} />);

    const logo = screen.getByAltText('FIAP Logo');
    expect(logo).toBeInTheDocument();

    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveStyle('width: 50%');
  });
});
