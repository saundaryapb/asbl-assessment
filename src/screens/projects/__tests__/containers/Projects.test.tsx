import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectsContainer from "../../containers/Projects";

vi.mock("../../components", () => ({
   ProjectsComponent: ({
      projects,
      selectedProject,
      isModalOpen,
      onEnquireClick,
      onModalClose,
   }: {
      projects: { name: string; title: string }[];
      selectedProject: { title: string } | null;
      isModalOpen: boolean;
      onEnquireClick: (p: { name: string; title: string }) => void;
      onModalClose: () => void;
   }) => (
      <div>
         <span data-testid="project-count">{projects.length}</span>
         <span data-testid="modal-open">{String(isModalOpen)}</span>
         <span data-testid="selected-title">{selectedProject?.title ?? "none"}</span>
         <button onClick={() => onEnquireClick(projects[0])}>Enquire</button>
         <button onClick={onModalClose}>CloseModal</button>
      </div>
   ),
}));

describe("screens/projects/containers/Projects", () => {
   it("passes all asblProjects to the component", () => {
      render(<ProjectsContainer />);
      const count = parseInt(screen.getByTestId("project-count").textContent ?? "0", 10);
      expect(count).toBeGreaterThan(0);
   });

   it("modal is closed by default", () => {
      render(<ProjectsContainer />);
      expect(screen.getByTestId("modal-open").textContent).toBe("false");
   });

   it("no project is selected by default", () => {
      render(<ProjectsContainer />);
      expect(screen.getByTestId("selected-title").textContent).toBe("none");
   });

   it("opens modal and sets selected project on enquire click", async () => {
      const user = userEvent.setup();
      render(<ProjectsContainer />);
      await user.click(screen.getByText("Enquire"));
      expect(screen.getByTestId("modal-open").textContent).toBe("true");
      expect(screen.getByTestId("selected-title").textContent).not.toBe("none");
   });

   it("closes modal on onModalClose", async () => {
      const user = userEvent.setup();
      render(<ProjectsContainer />);
      await user.click(screen.getByText("Enquire"));
      await user.click(screen.getByText("CloseModal"));
      expect(screen.getByTestId("modal-open").textContent).toBe("false");
   });

   it("clears selected project after modal close animation delay", async () => {
      const user = userEvent.setup();
      render(<ProjectsContainer />);
      await user.click(screen.getByText("Enquire"));
      await user.click(screen.getByText("CloseModal"));
      await waitFor(
         () => {
            expect(screen.getByTestId("selected-title").textContent).toBe("none");
         },
         { timeout: 500 },
      );
   });
});
