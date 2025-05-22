import { render, screen, fireEvent } from '@testing-library/react';
import Courses from './Courses';

interface course {
  name: string;
  tag: string;
}

interface category {
  tecnologia: course[];
  inovacao: course[];
  negocios: course[];
}



// Mock 
jest.mock('@/components/atomic/', () => ({
  Title: ({ text }: any) => (
    <h1 data-testid="title">{text.mainTitle} - {text.subTitle}</h1>
  ),
}));

// Mock
jest.mock('@/components/molecules/', () => ({
  CourseItem: ({ name, tag }: any) => (
    <div data-testid="course-item">{name} [{tag}]</div>
  ),
}));

describe('Courses', () => {
  const mockData : category = {
    tecnologia: [
      { name: 'Curso Tech 1', tag: 'tag1' },
      { name: 'Curso Tech 2', tag: 'tag2' },
    ],
    inovacao: [
      { name: 'Curso Inovação 1', tag: 'tag3' }
    ],
    negocios: [
      { name: 'Curso Negócios 1', tag: 'tag4' }
    ]
  };

  it('deve renderizar título e cursos da aba tecnologia por padrão', () => {
    render(<Courses data={mockData} />);


    expect(screen.getByTestId('title')).toHaveTextContent('Cursos - Cursos de Curta Duração');


    const courses = screen.getAllByTestId('course-item');
    expect(courses).toHaveLength(2);
    expect(courses[0]).toHaveTextContent('Curso Tech 1');
    expect(courses[1]).toHaveTextContent('Curso Tech 2');
  });

  it('deve trocar para aba inovação ao passar o mouse', () => {
    render(<Courses data={mockData} />);

    const inovacaoButton = screen.getByText('INOVACAO');
    fireEvent.mouseEnter(inovacaoButton);

    const courses = screen.getAllByTestId('course-item');
    expect(courses).toHaveLength(1);
    expect(courses[0]).toHaveTextContent('Curso Inovação 1');
  });

  it('deve trocar para aba negócios ao passar o mouse', () => {
    render(<Courses data={mockData} />);

    const negociosButton = screen.getByText('NEGOCIOS');
    fireEvent.mouseEnter(negociosButton);

    const courses = screen.getAllByTestId('course-item');
    expect(courses).toHaveLength(1);
    expect(courses[0]).toHaveTextContent('Curso Negócios 1');
  });
});
