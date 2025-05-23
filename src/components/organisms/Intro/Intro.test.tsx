import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Intro from "./Intro";

interface TextProps {
  text: {
    text: string;
    text2: string;
  };
}

interface ImageWithScrollTextProps {
  src: string;
  alt: string;
  scrollText: {
    text: string;
    text2: string;
  };
}


jest.mock("@/components/atomic", () => ({
  __esModule: true,
  MarqueeText: ({ text }: TextProps) => (
    <div data-testid="marquee-text">
      {text.text} {text.text2}
    </div>
  ),
}));

jest.mock("@/components/molecules/", () => ({
  __esModule: true,
  ImageWithScrollText: ({ src, alt, scrollText }: ImageWithScrollTextProps) => (
    <div data-testid="image-scroll-text">
      <img src={src} alt={alt} />
      <p>{scrollText.text}</p>
      <p>{scrollText.text2}</p>
    </div>
  ),
}));

describe("Intro component", () => {
  const mockData = {
    scrollText: {
      text: "Scroll 1",
      text2: "Scroll 2",
    },
    img: "/img.jpg",
    MarqueeText: {
      text: "Marquee 1",
      text2: "Marquee 2",
    },
  };

  it("renderiza os componentes MarqueeText e ImageWithScrollText com os dados corretos", () => {
    render(<Intro data={mockData} />);

    const marquee = screen.getByTestId("marquee-text");
    expect(marquee).toHaveTextContent("Marquee 1");
    expect(marquee).toHaveTextContent("Marquee 2");

    const imageScroll = screen.getByTestId("image-scroll-text");
    expect(imageScroll).toBeInTheDocument();

    const image = screen.getByAltText("Imagem de exemplo");
    expect(image).toHaveAttribute("src", "/img.jpg");

    expect(screen.getByText("Scroll 1")).toBeInTheDocument();
    expect(screen.getByText("Scroll 2")).toBeInTheDocument();
  });
});
