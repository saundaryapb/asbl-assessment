export interface Project {
   name: string;
   title: string;
   subtitle: string;
   description: string;
   image: string;
   details: string[];
}

export const ProjectStatus = {
   COMPLETED: "completed",
   UPCOMING: "upcoming",
   ACTIVE: "active",
} as const;

export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export interface ProjectSectionProps {
   project: Project;
   sectionId: string;
   isReversed: boolean;
   onEnquireClick: (project: Project) => void;
}

export interface ProjectModalProps {
   project: Project | null;
   isOpen: boolean;
   onClose: () => void;
}

export interface ProjectsComponentProps {
   projects: Project[];
   selectedProject: Project | null;
   isModalOpen: boolean;
   onEnquireClick: (project: Project) => void;
   onModalClose: () => void;
}
