import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Courses from "./Courses";


jest.mock("@/components/molecules/", () => ({
  __esModule: true,
  CourseItem: ({ name, tag }: { name: string; tag: string }) => (
    <div data-testid="course-item">
      <span>{name}</span> - <span>{tag}</span>
    </div>
  ),
}));


jest.mock("@/components/atomic/", () => ({
  __esModule: true,
  Title: ({ text }: { text: { mainTitle: string; subTitle: string } }) => (
    <div data-testid="title">
      <h1>{text.mainTitle}</h1>
      <h2>{text.subTitle}</h2>
    </div>
  ),
}));

describe("Courses Component", () => {
  const mockData = {
    tecnologia: [
      { name: "Curso React", tag: "Frontend" },
      { name: "Curso Node.js", tag: "Backend" },
    ],
    inovacao: [
      { name: "Design Thinking", tag: "Criatividade" },
    ],
    negocios: [
      { name: "Gestão de Projetos", tag: "PM" },
    ],
  };

  it("renderiza título e subtítulo corretamente", () => {
    render(<Courses data={mockData} />);

    expect(screen.getByText("Cursos")).toBeInTheDocument();
    expect(screen.getByText("Cursos de Curta Duração")).toBeInTheDocument();
  });

  it("renderiza abas e cursos da aba ativa (tecnologia por padrão)", () => {
    render(<Courses data={mockData} />);

    expect(screen.getByText("TECNOLOGIA")).toBeInTheDocument();
    expect(screen.getByText("INOVACAO")).toBeInTheDocument();
    expect(screen.getByText("NEGOCIOS")).toBeInTheDocument();

    expect(screen.getByText("Curso React")).toBeInTheDocument();
    expect(screen.getByText("Curso Node.js")).toBeInTheDocument();
  });

  it("muda para aba de inovação ao passar o mouse", () => {
    render(<Courses data={mockData} />);

    fireEvent.mouseEnter(screen.getByText("INOVACAO"));

    expect(screen.getByText("Design Thinking")).toBeInTheDocument();
    expect(screen.queryByText("Curso React")).not.toBeInTheDocument();
  });

  it("muda para aba de negócios ao passar o mouse", () => {
    render(<Courses data={mockData} />);

    fireEvent.mouseEnter(screen.getByText("NEGOCIOS"));

    expect(screen.getByText("Gestão de Projetos")).toBeInTheDocument();
    expect(screen.queryByText("Curso React")).not.toBeInTheDocument();
  });
});
