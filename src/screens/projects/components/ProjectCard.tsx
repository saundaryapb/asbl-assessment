import React from "react";
import { Typography, Tag, Image, Row, Col } from "antd";
import { HomeOutlined, EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
import { CustomButton, StatusTag } from "../../../shared/components";
import type { ProjectSectionProps } from "../type";
import { getProjectStatus, STATUS_BADGE_CONFIG } from "../utils";

const { Title, Paragraph, Text } = Typography;

const DETAIL_ICONS: Record<number, React.ReactNode> = {
   0: <HomeOutlined />,
   1: <EnvironmentOutlined />,
   2: <CalendarOutlined />,
};

const ProjectSection: React.FC<ProjectSectionProps> = ({ project, sectionId, onEnquireClick, isReversed }) => {
   const status = getProjectStatus(project.details);
   const statusBadge = STATUS_BADGE_CONFIG[status];
   const isBlue = !isReversed;

   return (
      <div
         id={sectionId}
         className={`scroll-mt-24 mx-4 sm:mx-6 lg:mx-8 my-5 rounded-2xl shadow-md overflow-hidden ${
            isBlue ? "bg-secondary" : "bg-white"
         }`}
      >
         <Row gutter={0} align="stretch">
            <Col
               xs={24}
               lg={12}
               className={`relative overflow-hidden h-60 sm:h-72 lg:h-auto lg:min-h-[380px]
                           [&_.ant-image]:!absolute [&_.ant-image]:!inset-0
                           [&_.ant-image-img]:!w-full [&_.ant-image-img]:!h-full [&_.ant-image-img]:!object-cover
                           ${isReversed ? "lg:order-2" : "lg:order-1"}`}
            >
               <Image src={project.image} alt={project.title} preview={false} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
               {statusBadge && (
                  <StatusTag
                     color={statusBadge.color}
                     label={statusBadge.label}
                     className="absolute top-4 left-4 m-0"
                  />
               )}
            </Col>

            <Col
               xs={24}
               lg={12}
               className={`flex flex-col p-8 sm:p-10 lg:p-12 ${isReversed ? "lg:order-1" : "lg:order-2"}`}
            >
               <div className="flex flex-col gap-2 mb-6">
                  <Title
                     level={2}
                     className={`!font-heading !mb-0 !leading-tight ${isBlue ? "!text-white" : "!text-primary"}`}
                  >
                     {project.title}
                  </Title>
                  <Text italic className={`!text-sm ${isBlue ? "!text-white/75" : "!text-secondary"}`}>
                     {project.subtitle}
                  </Text>
               </div>

               <Paragraph
                  className={`!text-base !leading-relaxed !mb-8 ${isBlue ? "!text-white/85" : "!text-gray-500"}`}
               >
                  {project.description}
               </Paragraph>

               <div className="flex flex-wrap gap-2 mb-10">
                  {project.details.map((detail, index) => (
                     <Tag
                        key={detail}
                        icon={DETAIL_ICONS[index]}
                        className={`rounded-full px-3 py-1 text-sm font-medium m-0 ${
                           isBlue
                              ? "!bg-white !border-white !text-secondary [&_.anticon]:!text-secondary"
                              : "bg-primary/5 border-primary/20 !text-primary"
                        }`}
                     >
                        {detail}
                     </Tag>
                  ))}
               </div>

               <CustomButton
                  type={isBlue ? "default" : "primary"}
                  size="large"
                  onClick={() => onEnquireClick(project)}
                  className={`self-start rounded-xl font-semibold ${
                     isBlue ? "!bg-white !text-primary !border-white hover:!opacity-90" : ""
                  }`}
               >
                  Enquire Now
               </CustomButton>
            </Col>
         </Row>
      </div>
   );
};

export default ProjectSection;
