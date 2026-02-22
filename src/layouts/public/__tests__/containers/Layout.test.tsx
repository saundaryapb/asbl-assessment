import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PublicLayoutContainer from "../../containers/Layout";

vi.mock("../../components", () => ({
   LayoutComponent: ({
      drawerOpen,
      handleDrawerChange,
   }: {
      drawerOpen: boolean;
      handleDrawerChange: (open: boolean) => void;
   }) => (
      <div>
         <span data-testid="drawer-state">{String(drawerOpen)}</span>
         <button onClick={() => handleDrawerChange(true)}>Open</button>
         <button onClick={() => handleDrawerChange(false)}>Close</button>
      </div>
   ),
}));

describe("layouts/public/containers/PublicLayoutContainer", () => {
   it("initialises drawer as closed", () => {
      render(<PublicLayoutContainer />);
      expect(screen.getByTestId("drawer-state").textContent).toBe("false");
   });

   it("opens the drawer when handleDrawerChange(true) is called", async () => {
      const user = userEvent.setup();
      render(<PublicLayoutContainer />);
      await user.click(screen.getByText("Open"));
      expect(screen.getByTestId("drawer-state").textContent).toBe("true");
   });

   it("closes the drawer when handleDrawerChange(false) is called", async () => {
      const user = userEvent.setup();
      render(<PublicLayoutContainer />);
      await user.click(screen.getByText("Open"));
      await user.click(screen.getByText("Close"));
      expect(screen.getByTestId("drawer-state").textContent).toBe("false");
   });
});
