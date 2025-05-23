import { render, screen, fireEvent } from '@testing-library/react';
import CoursesMobile from './CoursesMobile';

const mockData = {
  tecnologia: [
    { name: 'Curso de React', tag: 'frontend' },
    { name: 'Curso de Node.js', tag: 'backend' },
  ],
  inovacao: [
    { name: 'Design Thinking', tag: 'criatividade' },
  ],
  negocios: [
    { name: 'Gestão Empresarial', tag: 'administração' },
  ],
};

describe('CoursesMobile', () => {
  it('renderiza os títulos principais corretamente', () => {
    render(<CoursesMobile data={mockData} />);
    expect(screen.getByText('Cursos')).toBeInTheDocument();
    expect(screen.getByText('Cursos de Curta Duração')).toBeInTheDocument();
  });

  it('renderiza os cabeçalhos das categorias', () => {
    render(<CoursesMobile data={mockData} />);
    expect(screen.getByText('TECNOLOGIA')).toBeInTheDocument();
    expect(screen.getByText('INOVACAO')).toBeInTheDocument();
    expect(screen.getByText('NEGOCIOS')).toBeInTheDocument();
  });

  it('expande a categoria e mostra os cursos ao clicar', () => {
    render(<CoursesMobile data={mockData} />);
    const tecnologiaHeader = screen.getByText('TECNOLOGIA');

    fireEvent.click(tecnologiaHeader);

    expect(screen.getByText('Curso de React')).toBeInTheDocument();
    expect(screen.getByText('Curso de Node.js')).toBeInTheDocument();
  });

  it('expande uma categoria e fecha a anterior', () => {
    render(<CoursesMobile data={mockData} />);

    fireEvent.click(screen.getByText('TECNOLOGIA'));
    expect(screen.getByText('Curso de React')).toBeInTheDocument();

    fireEvent.click(screen.getByText('NEGOCIOS'));
    expect(screen.getByText('Gestão Empresarial')).toBeInTheDocument();

    expect(screen.queryByText('Curso de React')).not.toBeInTheDocument();
  });
});
