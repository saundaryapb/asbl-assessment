import React from "react";
import { Anchor, Typography, Flex } from "antd";
import type { ProjectsComponentProps } from "../type";
import ProjectSection from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { buildProjectSectionId } from "../utils";

const { Title, Text } = Typography;

const ProjectsComponent: React.FC<ProjectsComponentProps> = ({
   projects,
   selectedProject,
   isModalOpen,
   onEnquireClick,
   onModalClose,
}) => {
   const anchorItems = projects.map((project) => ({
      key: project.name,
      href: `#${buildProjectSectionId(project.name)}`,
      title: project.title,
   }));

   return (
      <Flex vertical className="w-full min-h-screen">
         <Flex vertical align="center" gap={10} className="pt-10 pb-8 px-6 text-center">
            <Text className="!text-secondary font-semibold text-xs uppercase tracking-[0.25em]">Our Portfolio</Text>
            <Title level={1} className="!text-primary !font-heading !m-0 !leading-tight !text-4xl sm:!text-5xl">
               Our Projects
            </Title>
            <Flex className="w-14 h-0.5 bg-secondary rounded-full" />
            <Text className="!text-gray-400 max-w-lg text-center text-base leading-relaxed">
               Discover our thoughtfully crafted residences across Hyderabad — where every project is a statement of
               fine living.
            </Text>
         </Flex>

         <Flex className="w-full flex-1 overflow-hidden">
            <Flex vertical className="flex-1 min-w-0 overflow-hidden">
               {projects.map((project, index) => (
                  <ProjectSection
                     key={project.name}
                     project={project}
                     sectionId={buildProjectSectionId(project.name)}
                     onEnquireClick={onEnquireClick}
                     isReversed={index % 2 !== 0}
                  />
               ))}
            </Flex>

            <div className="hidden lg:block w-52 flex-shrink-0 sticky top-0 h-screen py-12 pr-6 pl-2">
               <Anchor
                  affix={false}
                  offsetTop={96}
                  items={anchorItems}
                  className="[&_.ant-anchor-ink]:!bg-secondary
                             [&_.ant-anchor-link-title]:!text-gray-400
                             [&_.ant-anchor-link-title-active]:!text-secondary
                             [&_.ant-anchor-link-title:hover]:!text-primary
                             [&_.ant-anchor]:!bg-transparent"
               />
            </div>
         </Flex>

         <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={onModalClose} />
      </Flex>
   );
};

export default ProjectsComponent;
