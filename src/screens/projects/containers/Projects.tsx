import React, { useState, useCallback } from "react";
import { ProjectsComponent } from "../components";
import { asblProjects } from "../constants";
import type { Project } from "../type";

const Projects: React.FC = () => {
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleEnquireClick = useCallback((project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
   }, []);

   const handleModalClose = useCallback(() => {
      setIsModalOpen(false);
      setTimeout(() => setSelectedProject(null), 300);
   }, []);

   return (
      <ProjectsComponent
         projects={asblProjects}
         selectedProject={selectedProject}
         isModalOpen={isModalOpen}
         onEnquireClick={handleEnquireClick}
         onModalClose={handleModalClose}
      />
   );
};

export default Projects;
