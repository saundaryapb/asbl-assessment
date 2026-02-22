import { describe, it, expect } from "vitest";
import { menus, loginMenu, footerColumns, footerSocialLinks, footerLegalLinks, SOCIAL_ICONS } from "../constants";

describe("layouts/public/constants", () => {
   describe("menus", () => {
      it("contains 5 items", () => {
         expect(menus).toHaveLength(5);
      });

      it("each item has name, path and label", () => {
         menus.forEach((item) => {
            expect(item).toHaveProperty("name");
            expect(item).toHaveProperty("path");
            expect(item).toHaveProperty("label");
         });
      });

      it("includes Our Projects entry", () => {
         expect(menus.some((m) => m.label === "Our Projects")).toBe(true);
      });
   });

   describe("loginMenu", () => {
      it("contains 2 items", () => {
         expect(loginMenu).toHaveLength(2);
      });

      it("includes Find Agent and Agent Login", () => {
         const labels = loginMenu.map((m) => m.label);
         expect(labels).toContain("Find Agent");
         expect(labels).toContain("Agent Login");
      });
   });

   describe("footerColumns", () => {
      it("has exactly 3 columns", () => {
         expect(footerColumns).toHaveLength(3);
      });

      it("column titles are Explore, Projects and Connect", () => {
         const titles = footerColumns.map((c) => c.title);
         expect(titles).toEqual(["Explore", "Projects", "Connect"]);
      });

      it("every column has at least one link", () => {
         footerColumns.forEach((col) => {
            expect(col.links.length).toBeGreaterThan(0);
         });
      });

      it("Projects column contains all 7 ASBL projects", () => {
         const projectsCol = footerColumns.find((c) => c.title === "Projects");
         expect(projectsCol?.links).toHaveLength(7);
      });
   });

   describe("footerSocialLinks", () => {
      it("contains 4 social platforms", () => {
         expect(footerSocialLinks).toHaveLength(4);
      });

      it("every entry has name, href and label", () => {
         footerSocialLinks.forEach((s) => {
            expect(s).toHaveProperty("name");
            expect(s).toHaveProperty("href");
            expect(s).toHaveProperty("label");
         });
      });
   });

   describe("footerLegalLinks", () => {
      it("contains Privacy Policy, Terms of Use and Sitemap", () => {
         const labels = footerLegalLinks.map((l) => l.label);
         expect(labels).toContain("Privacy Policy");
         expect(labels).toContain("Terms of Use");
         expect(labels).toContain("Sitemap");
      });
   });

   describe("SOCIAL_ICONS", () => {
      it("has an icon for every social platform", () => {
         footerSocialLinks.forEach((s) => {
            expect(SOCIAL_ICONS[s.name]).toBeDefined();
         });
      });
   });
});
