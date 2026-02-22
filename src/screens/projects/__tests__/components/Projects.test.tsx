import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectsComponent from "../../components/Projects";
import type { Project } from "../../type";

const mockProjects: Project[] = [
   {
      name: "asbl_broadway",
      title: "ASBL Broadway",
      subtitle: "Subtitle A",
      description: "Description A",
      image: "/broadway.webp",
      details: ["Exclusive 3 BHK", "Gachibowli"],
   },
   {
      name: "asbl_landmark",
      title: "ASBL Landmark",
      subtitle: "Subtitle B",
      description: "Description B",
      image: "/landmark.webp",
      details: ["Premium 4 BHK", "Kukatpally"],
   },
];

const defaultProps = {
   projects: mockProjects,
   selectedProject: null,
   isModalOpen: false,
   onEnquireClick: vi.fn(),
   onModalClose: vi.fn(),
};

describe("screens/projects/components/ProjectsComponent", () => {
   it("renders the Our Projects heading", () => {
      render(<ProjectsComponent {...defaultProps} />);
      expect(screen.getByText("Our Projects")).toBeInTheDocument();
   });

   it("renders the Our Portfolio eyebrow label", () => {
      render(<ProjectsComponent {...defaultProps} />);
      expect(screen.getByText("Our Portfolio")).toBeInTheDocument();
   });

   it("renders all project sections", () => {
      render(<ProjectsComponent {...defaultProps} />);
      // Title appears in both anchor nav and section heading — use getAllByText
      expect(screen.getAllByText("ASBL Broadway").length).toBeGreaterThan(0);
      expect(screen.getAllByText("ASBL Landmark").length).toBeGreaterThan(0);
   });

   it("renders anchor links for each project", () => {
      render(<ProjectsComponent {...defaultProps} />);
      expect(screen.getAllByText("ASBL Broadway").length).toBeGreaterThan(0);
      expect(screen.getAllByText("ASBL Landmark").length).toBeGreaterThan(0);
   });

   it("does not render the modal when isModalOpen is false", () => {
      render(<ProjectsComponent {...defaultProps} />);
      expect(screen.queryByText("ASBL Residences")).not.toBeInTheDocument();
   });

   it("renders the modal when isModalOpen is true with a selected project", () => {
      render(<ProjectsComponent {...defaultProps} selectedProject={mockProjects[0]} isModalOpen={true} />);
      expect(screen.getByText("ASBL Residences")).toBeInTheDocument();
   });

   it("calls onEnquireClick when Enquire Now is clicked", async () => {
      const user = userEvent.setup();
      const onEnquireClick = vi.fn();
      render(<ProjectsComponent {...defaultProps} onEnquireClick={onEnquireClick} />);
      const buttons = screen.getAllByRole("button", { name: /Enquire Now/i });
      await user.click(buttons[0]);
      expect(onEnquireClick).toHaveBeenCalledWith(mockProjects[0]);
   });
});
