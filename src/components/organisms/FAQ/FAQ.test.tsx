import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';

const mockData = [
  {
    key: 'matricular',
    label: 'Como me matricular?',
    answer: 'Você pode se matricular acessando o site e clicando em "Matricular".',
    color: 'blue',
  },
  {
    key: 'pagamento',
    label: 'Formas de pagamento?',
    answer: 'Aceitamos cartão de crédito, boleto e PIX.',
    color: 'green',
  },
];

describe('FAQ Component (FAQ)', () => {
  test('renderiza título e subtítulo corretamente', () => {
    render(<FAQ data={mockData} />);

    expect(screen.getByText('FAQ')).toBeInTheDocument();
    expect(screen.getByText('Dúvidas Frequentes')).toBeInTheDocument();
  });

  test('renderiza todos os botões das abas', () => {
    render(<FAQ data={mockData} />);

    mockData.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  test('exibe a resposta ao passar o mouse sobre o botão', () => {
    render(<FAQ data={mockData} />);

    const button = screen.getByText('Formas de pagamento?');
    fireEvent.mouseEnter(button);

    expect(screen.getByText('Aceitamos cartão de crédito, boleto e PIX.')).toBeInTheDocument();
  });

  test('exibe a resposta inicial (matricular) ao carregar o componente', () => {
    render(<FAQ data={mockData} />);
    expect(screen.getByText(mockData[0].answer)).toBeInTheDocument();
  });
});
