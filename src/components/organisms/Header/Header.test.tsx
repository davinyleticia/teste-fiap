// components/organisms/Header/Header.test.tsx
import { render, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "./Header";

// Mock HeaderView
jest.mock("../../molecules/HeaderView/HeaderView", () => ({
  __esModule: true,
  default: ({ scrollProgress }: { scrollProgress: number }) => (
    <div data-testid="header-view">{scrollProgress}</div>
  ),
}));

describe("Header organism", () => {
  beforeEach(() => {
    // Simula um documento com altura definida
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 2000,
    });
    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 1000,
    });
  });

  it("updates scrollProgress on scroll", () => {
    const { getByTestId } = render(<Header />);

    // Simula o scroll
    act(() => {
      window.scrollY = 500;
      window.dispatchEvent(new Event("scroll"));
    });

    const headerView = getByTestId("header-view");
    expect(headerView.textContent).toBe("50"); // 500/1000 = 50%
  });
});
