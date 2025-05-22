import { render, screen } from "@testing-library/react";
import ImageWithScrollText from "./ImageWithScrollText";

type Props = {
  src: string;
  alt: string;
  scrollText: {
    text: string;
    text2: string;
  }
};


// Mock
jest.mock('@/components/atomic/', () => ({
  ParallaxText: ({ text }: any) => (
    <div data-testid="parallax-text">
      {text.text} {text.text2}
    </div>
  ),
}));

// Mock
jest.mock('next/image', () => (props: any) => {
  return <img {...props} />;
});

describe("ImageWithScrollText", () => {
  const mockProps : Props = {
    src: "/example.jpg",
    alt: "Imagem de teste",
    scrollText: {
      text: "Texto de rolagem 1",
      text2: "Texto de rolagem 2"
    }
  };

  it("Deve renderizar a imagem e o texto de rolagem", () => {
    render(<ImageWithScrollText {...mockProps} />);


    const image = screen.getByAltText("Imagem de teste");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/example.jpg");


    const parallax = screen.getByTestId("parallax-text");
    expect(parallax).toHaveTextContent("Texto de rolagem 1");
    expect(parallax).toHaveTextContent("Texto de rolagem 2");
  });
});
