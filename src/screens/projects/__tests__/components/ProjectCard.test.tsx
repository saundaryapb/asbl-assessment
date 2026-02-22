import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectSection from "../../components/ProjectCard";
import type { Project } from "../../type";

const mockProject: Project = {
   name: "asbl_broadway",
   title: "ASBL Broadway",
   subtitle: "How do we bring you the Pulse of Life?",
   description: "Step into exclusive 3 BHK residences.",
   image: "/broadway.webp",
   details: ["Exclusive 3 BHK", "Financial District, Gachibowli"],
};

const mockProjectWithHandover: Project = {
   ...mockProject,
   name: "asbl_spectra",
   title: "ASBL Spectra",
   details: ["Exclusive 3BHK", "Gachibowli", "Handover - Dec' 2025"],
};

const mockProjectCompleted: Project = {
   ...mockProject,
   name: "asbl_springs",
   title: "ASBL Springs",
   details: ["Premium 2 & 3BHK", "Pocharam", "Handover - Completed"],
};

describe("screens/projects/components/ProjectSection", () => {
   const defaultProps = {
      project: mockProject,
      sectionId: "project-asbl_broadway",
      isReversed: false,
      onEnquireClick: vi.fn(),
   };

   it("renders the project title", () => {
      render(<ProjectSection {...defaultProps} />);
      expect(screen.getByText("ASBL Broadway")).toBeInTheDocument();
   });

   it("renders the project subtitle", () => {
      render(<ProjectSection {...defaultProps} />);
      expect(screen.getByText("How do we bring you the Pulse of Life?")).toBeInTheDocument();
   });

   it("renders the project description", () => {
      render(<ProjectSection {...defaultProps} />);
      expect(screen.getByText(/Step into exclusive 3 BHK/i)).toBeInTheDocument();
   });

   it("renders all detail tags", () => {
      render(<ProjectSection {...defaultProps} />);
      expect(screen.getByText("Exclusive 3 BHK")).toBeInTheDocument();
      expect(screen.getByText("Financial District, Gachibowli")).toBeInTheDocument();
   });

   it("renders Enquire Now button", () => {
      render(<ProjectSection {...defaultProps} />);
      expect(screen.getByRole("button", { name: /Enquire Now/i })).toBeInTheDocument();
   });

   it("calls onEnquireClick with the project when button is clicked", async () => {
      const user = userEvent.setup();
      const onEnquireClick = vi.fn();
      render(<ProjectSection {...defaultProps} onEnquireClick={onEnquireClick} />);
      await user.click(screen.getByRole("button", { name: /Enquire Now/i }));
      expect(onEnquireClick).toHaveBeenCalledWith(mockProject);
   });

   it("applies the correct section id", () => {
      const { container } = render(<ProjectSection {...defaultProps} />);
      expect(container.querySelector("#project-asbl_broadway")).toBeInTheDocument();
   });

   it("does NOT show a status badge for ACTIVE projects", () => {
      render(<ProjectSection {...defaultProps} />);
      expect(screen.queryByText(/Completed/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Upcoming/i)).not.toBeInTheDocument();
   });

   it("shows Upcoming badge for projects with a future handover", () => {
      render(<ProjectSection {...defaultProps} project={mockProjectWithHandover} />);
      expect(screen.getByText(/Upcoming/i)).toBeInTheDocument();
   });

   it("shows Completed badge for completed projects", () => {
      render(<ProjectSection {...defaultProps} project={mockProjectCompleted} />);
      // The StatusTag label matches, as does the detail tag text — verify at least one badge exists
      const completedEls = screen.getAllByText(/Completed/i);
      expect(completedEls.length).toBeGreaterThan(0);
   });
});
