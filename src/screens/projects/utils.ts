import { ProjectStatus } from "./type";
import { HANDOVER_KEYWORD, COMPLETED_KEYWORD } from "./constants";

export const getProjectStatus = (details: string[]): ProjectStatus => {
   const handoverDetail = details.find((detail) => detail.toLowerCase().includes(HANDOVER_KEYWORD));
   if (!handoverDetail) return ProjectStatus.ACTIVE;
   if (handoverDetail.toLowerCase().includes(COMPLETED_KEYWORD)) return ProjectStatus.COMPLETED;
   return ProjectStatus.UPCOMING;
};

export const buildProjectSectionId = (projectName: string): string => `project-${projectName}`;

export const STATUS_BADGE_CONFIG: Record<ProjectStatus, { label: string; color: string } | null> = {
   [ProjectStatus.COMPLETED]: { label: "✓  Completed", color: "success" },
   [ProjectStatus.UPCOMING]: { label: "⏱  Upcoming", color: "processing" },
   [ProjectStatus.ACTIVE]: null,
};

export const DETAIL_ICONS_MAP: Record<number, string> = {
   0: "home",
   1: "environment",
   2: "calendar",
};
