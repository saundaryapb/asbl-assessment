import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import LayoutComponent from "../../components/Layout";

vi.mock("../../components/header", () => ({
   default: ({ drawerOpen }: { drawerOpen: boolean }) => (
      <div data-testid="header" data-drawer-open={String(drawerOpen)} />
   ),
}));

vi.mock("../../components/content", () => ({
   default: () => <div data-testid="content" />,
}));

vi.mock("../../components/footer", () => ({
   default: () => <div data-testid="footer" />,
}));

describe("layouts/public/components/LayoutComponent", () => {
   const defaultProps = {
      drawerOpen: false,
      handleDrawerChange: vi.fn(),
   };

   it("renders Header, Content and Footer", () => {
      render(<LayoutComponent {...defaultProps} />);
      expect(screen.getByTestId("header")).toBeInTheDocument();
      expect(screen.getByTestId("content")).toBeInTheDocument();
      expect(screen.getByTestId("footer")).toBeInTheDocument();
   });

   it("passes drawerOpen prop to Header", () => {
      render(<LayoutComponent {...defaultProps} drawerOpen={true} />);
      expect(screen.getByTestId("header").getAttribute("data-drawer-open")).toBe("true");
   });
});
