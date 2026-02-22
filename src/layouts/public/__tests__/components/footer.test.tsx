import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../../components/footer";
import { footerColumns, footerSocialLinks, footerLegalLinks } from "../../constants";

vi.mock("../../constants", async (importOriginal) => {
   const actual = await importOriginal<typeof import("../../constants")>();
   return { ...actual };
});

describe("layouts/public/components/Footer", () => {
   it("renders the ASBL logo", () => {
      render(<Footer />);
      expect(screen.getByAltText("ASBL")).toBeInTheDocument();
   });

   it("renders the tagline text", () => {
      render(<Footer />);
      expect(screen.getByText(/Building extraordinary living/i)).toBeInTheDocument();
   });

   it("renders all footer column titles", () => {
      render(<Footer />);
      footerColumns.forEach((col) => {
         expect(screen.getByText(col.title)).toBeInTheDocument();
      });
   });

   it("renders all footer column links", () => {
      render(<Footer />);
      footerColumns.forEach((col) => {
         col.links.forEach((link) => {
            expect(screen.getAllByText(link.label).length).toBeGreaterThan(0);
         });
      });
   });

   it("renders all social link aria-labels", () => {
      render(<Footer />);
      footerSocialLinks.forEach((s) => {
         expect(screen.getByLabelText(s.label)).toBeInTheDocument();
      });
   });

   it("renders all legal links", () => {
      render(<Footer />);
      footerLegalLinks.forEach((l) => {
         expect(screen.getByText(l.label)).toBeInTheDocument();
      });
   });

   it("renders the current year in the copyright line", () => {
      render(<Footer />);
      const year = new Date().getFullYear().toString();
      expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
   });

   it("renders ASBL in the copyright line", () => {
      render(<Footer />);
      expect(screen.getByText(/ASBL\. All rights reserved/i)).toBeInTheDocument();
   });
});
