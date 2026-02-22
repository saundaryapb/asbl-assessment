import { describe, it, expect } from "vitest";
import { HANDOVER_KEYWORD, COMPLETED_KEYWORD, asblProjects } from "../constants";

describe("screens/projects/constants", () => {
   it("HANDOVER_KEYWORD is 'handover'", () => {
      expect(HANDOVER_KEYWORD).toBe("handover");
   });

   it("COMPLETED_KEYWORD is 'completed'", () => {
      expect(COMPLETED_KEYWORD).toBe("completed");
   });

   describe("asblProjects", () => {
      it("contains 7 projects", () => {
         expect(asblProjects).toHaveLength(7);
      });

      it("every project has required fields", () => {
         asblProjects.forEach((project) => {
            expect(project).toHaveProperty("name");
            expect(project).toHaveProperty("title");
            expect(project).toHaveProperty("subtitle");
            expect(project).toHaveProperty("description");
            expect(project).toHaveProperty("image");
            expect(project).toHaveProperty("details");
            expect(Array.isArray(project.details)).toBe(true);
         });
      });

      it("all project names are unique", () => {
         const names = asblProjects.map((p) => p.name);
         expect(new Set(names).size).toBe(names.length);
      });

      it("includes ASBL Broadway", () => {
         expect(asblProjects.some((p) => p.name === "asbl_broadway")).toBe(true);
      });

      it("includes ASBL Springs", () => {
         expect(asblProjects.some((p) => p.name === "asbl_springs")).toBe(true);
      });
   });
});
