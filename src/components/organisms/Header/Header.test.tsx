import { render, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";

jest.mock("../../molecules/HeaderView/HeaderView", () => ({
  __esModule: true,
  default: ({ scrollProgress }: { scrollProgress: number }) => (
    <div data-testid="header-view">{scrollProgress}</div>
  ),
}));

describe("Header organism", () => {
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
    const { getByTestId } = render(<Header />);

    act(() => {
      window.scrollY = 500;
      window.dispatchEvent(new Event("scroll"));
    });

    const headerView = getByTestId("header-view");
    expect(headerView.textContent).toBe("50");
  });
});
