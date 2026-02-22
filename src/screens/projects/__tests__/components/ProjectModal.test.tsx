import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectModal from "../../components/ProjectModal";
import type { Project } from "../../type";

const mockProject: Project = {
   name: "asbl_broadway",
   title: "ASBL Broadway",
   subtitle: "How do we bring you the Pulse of Life?",
   description: "Step into exclusive 3 BHK residences.",
   image: "/broadway.webp",
   details: ["Exclusive 3 BHK", "Financial District, Gachibowli"],
};

describe("screens/projects/components/ProjectModal", () => {
   it("renders nothing when project is null", () => {
      const { container } = render(<ProjectModal project={null} isOpen={true} onClose={vi.fn()} />);
      expect(container).toBeEmptyDOMElement();
   });

   it("renders the project title when open", () => {
      render(<ProjectModal project={mockProject} isOpen={true} onClose={vi.fn()} />);
      expect(screen.getByText("ASBL Broadway")).toBeInTheDocument();
   });

   it("renders the project subtitle when open", () => {
      render(<ProjectModal project={mockProject} isOpen={true} onClose={vi.fn()} />);
      expect(screen.getByText("How do we bring you the Pulse of Life?")).toBeInTheDocument();
   });

   it("renders the project description", () => {
      render(<ProjectModal project={mockProject} isOpen={true} onClose={vi.fn()} />);
      expect(screen.getByText(/Step into exclusive 3 BHK/i)).toBeInTheDocument();
   });

   it("renders all detail tags", () => {
      render(<ProjectModal project={mockProject} isOpen={true} onClose={vi.fn()} />);
      expect(screen.getByText("Exclusive 3 BHK")).toBeInTheDocument();
      expect(screen.getByText("Financial District, Gachibowli")).toBeInTheDocument();
   });

   it("renders the ASBL Residences eyebrow label", () => {
      render(<ProjectModal project={mockProject} isOpen={true} onClose={vi.fn()} />);
      expect(screen.getByText("ASBL Residences")).toBeInTheDocument();
   });

   it("calls onClose when Close button is clicked", async () => {
      const user = userEvent.setup();
      const onClose = vi.fn();
      render(<ProjectModal project={mockProject} isOpen={true} onClose={onClose} />);
      await user.click(screen.getByRole("button", { name: /Close/i }));
      expect(onClose).toHaveBeenCalledTimes(1);
   });

   it("renders Enquire Now button", () => {
      render(<ProjectModal project={mockProject} isOpen={true} onClose={vi.fn()} />);
      expect(screen.getByRole("button", { name: /Enquire Now/i })).toBeInTheDocument();
   });

   it("does not render modal content when isOpen is false", () => {
      render(<ProjectModal project={mockProject} isOpen={false} onClose={vi.fn()} />);
      expect(screen.queryByText("ASBL Broadway")).not.toBeInTheDocument();
   });
});
