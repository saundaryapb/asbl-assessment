import { describe, it, expect } from "vitest";
import { getProjectStatus, buildProjectSectionId, STATUS_BADGE_CONFIG } from "../utils";
import { ProjectStatus } from "../type";

describe("screens/projects/utils", () => {
   describe("getProjectStatus", () => {
      it("returns ACTIVE when no handover detail exists", () => {
         expect(getProjectStatus(["Exclusive 3 BHK", "Gachibowli"])).toBe(ProjectStatus.ACTIVE);
      });

      it("returns COMPLETED when detail contains 'handover' and 'completed'", () => {
         expect(getProjectStatus(["Handover - Completed"])).toBe(ProjectStatus.COMPLETED);
      });

      it("returns UPCOMING when detail contains 'handover' but not 'completed'", () => {
         expect(getProjectStatus(["Handover - Feb' 2025"])).toBe(ProjectStatus.UPCOMING);
      });

      it("is case-insensitive for keyword matching", () => {
         expect(getProjectStatus(["HANDOVER - COMPLETED"])).toBe(ProjectStatus.COMPLETED);
         expect(getProjectStatus(["HANDOVER - Dec 2025"])).toBe(ProjectStatus.UPCOMING);
      });

      it("returns ACTIVE for an empty details array", () => {
         expect(getProjectStatus([])).toBe(ProjectStatus.ACTIVE);
      });
   });

   describe("buildProjectSectionId", () => {
      it("prefixes the name with 'project-'", () => {
         expect(buildProjectSectionId("asbl_broadway")).toBe("project-asbl_broadway");
      });

      it("preserves the exact project name as-is", () => {
         expect(buildProjectSectionId("asbl_springs")).toBe("project-asbl_springs");
      });
   });

   describe("STATUS_BADGE_CONFIG", () => {
      it("returns a config object for COMPLETED", () => {
         const config = STATUS_BADGE_CONFIG[ProjectStatus.COMPLETED];
         expect(config).not.toBeNull();
         expect(config?.label).toContain("Completed");
         expect(config?.color).toBe("success");
      });

      it("returns a config object for UPCOMING", () => {
         const config = STATUS_BADGE_CONFIG[ProjectStatus.UPCOMING];
         expect(config).not.toBeNull();
         expect(config?.label).toContain("Upcoming");
         expect(config?.color).toBe("processing");
      });

      it("returns null for ACTIVE", () => {
         expect(STATUS_BADGE_CONFIG[ProjectStatus.ACTIVE]).toBeNull();
      });
   });
});
