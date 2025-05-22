import { render, screen } from "@testing-library/react";
import Intro from "./Intro";

export interface IntroProps {
        scrollText: {
            text: string;
            text2: string;
        }
        img: string;
        MarqueeText: {
            text: string;
            text2: string;
        };
}

// Mock
jest.mock("@/components/atomic", () => ({
  MarqueeText: ({ text }: any) => <div data-testid="marquee">{text.text} {text.text2}</div>,
}));

jest.mock("@/components/molecules/", () => ({
  ImageWithScrollText: ({ src, scrollText, alt }: any) => (
    <div data-testid="image-scroll-text">
      <img src={src} alt={alt} />
      <span>{scrollText.text}</span>
      <span>{scrollText.text2}</span>
    </div>
  ),
}));

describe("Intro Component", () => {
  const mockData : IntroProps = {
    scrollText: {
      text: "Scroll text 1",
      text2: "Scroll text 2",
    },
    img: "example.jpg",
    MarqueeText: {
      text: "Marquee 1",
      text2: "Marquee 2",
    },
  };

  it("Deve renderizar MarqueeText e ImageWithScrollText com dados corretos", () => {
    render(<Intro data={mockData} />);

    expect(screen.getByTestId("marquee")).toHaveTextContent("Marquee 1 Marquee 2");

    expect(screen.getByTestId("image-scroll-text")).toHaveTextContent("Scroll text 1");
    expect(screen.getByTestId("image-scroll-text")).toHaveTextContent("Scroll text 2");
    expect(screen.getByAltText("Imagem de exemplo")).toHaveAttribute("src", "example.jpg");
  });
});
