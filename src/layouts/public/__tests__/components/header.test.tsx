import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../../components/header";

const mockHandleDrawerChange = vi.fn();

const defaultProps = {
   drawerOpen: false,
   handleDrawerChange: mockHandleDrawerChange,
};

describe("layouts/public/components/Header", () => {
   beforeEach(() => {
      mockHandleDrawerChange.mockClear();
   });

   it("renders the ASBL logo", () => {
      render(<Header {...defaultProps} />);
      expect(screen.getByAltText("ASBL Logo")).toBeInTheDocument();
   });

   it("renders all main menu labels", () => {
      render(<Header {...defaultProps} />);
      expect(screen.getAllByText("Our Story").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Our Projects").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Blogs").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Media").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Events").length).toBeGreaterThan(0);
   });

   it("renders login menu labels", () => {
      render(<Header {...defaultProps} />);
      expect(screen.getAllByText("Find Agent").length).toBeGreaterThan(0);
      expect(screen.getAllByText("Agent Login").length).toBeGreaterThan(0);
   });

   it("calls handleDrawerChange(true) when hamburger button is clicked", async () => {
      const user = userEvent.setup();
      render(<Header {...defaultProps} />);
      const hamburger = screen.getByLabelText("Open navigation menu");
      await user.click(hamburger);
      expect(mockHandleDrawerChange).toHaveBeenCalledWith(true);
   });

   it("opens the mobile drawer when drawerOpen is true", () => {
      render(<Header {...defaultProps} drawerOpen={true} />);
      const logos = screen.getAllByAltText("ASBL Logo");
      expect(logos.length).toBeGreaterThan(1);
   });
});
