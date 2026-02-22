import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Content from "../../components/content";

vi.mock("../../../../screens", () => ({
   Projects: () => <div data-testid="projects-screen">Projects</div>,
}));

describe("layouts/public/components/Content", () => {
   it("renders the Projects screen", () => {
      render(<Content />);
      expect(screen.getByTestId("projects-screen")).toBeInTheDocument();
   });

   it("applies container wrapper classes", () => {
      const { container } = render(<Content />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.tagName).toBe("DIV");
      expect(wrapper.className).toContain("rounded-3xl");
   });
});
