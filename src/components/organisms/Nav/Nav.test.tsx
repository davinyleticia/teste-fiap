import { render, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import Nav from "./Nav";

jest.mock("../../molecules/NavView/NavView", () => ({
  __esModule: true,
  default: ({ scrollProgress }: { scrollProgress: number }) => (
    <div data-testid="header-view">{scrollProgress}</div>
  ),
}));

describe("Nav organism", () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 1000,
    });
  });

  it("Atualiza scrollProgress na rolagem", () => {
    const { getByTestId } = render(<Nav />);

    act(() => {
      window.scrollY = 500;
      window.dispatchEvent(new Event("scroll"));
    });

    const NavView = getByTestId("header-view");
    expect(NavView.textContent).toBe("50");
  });
});
