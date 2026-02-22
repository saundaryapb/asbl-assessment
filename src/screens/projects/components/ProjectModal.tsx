import React from "react";
import { Tag, Typography, Image, Row, Col } from "antd";
import { HomeOutlined, EnvironmentOutlined, CalendarOutlined } from "@ant-design/icons";
import { CustomButton, CustomModal } from "../../../shared/components";
import type { ProjectModalProps } from "../type";

const { Title, Paragraph, Text } = Typography;

const HIGHLIGHT_ICONS: Record<number, React.ReactNode> = {
   0: <HomeOutlined />,
   1: <EnvironmentOutlined />,
   2: <CalendarOutlined />,
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
   if (!project) return null;

   return (
      <CustomModal
         open={isOpen}
         onCancel={onClose}
         title={null}
         footer={null}
         closable={false}
         width={700}
         centered
         styles={{
            body: { padding: 0 },
            mask: {
               backdropFilter: "blur(8px)",
               background: "rgba(0, 47, 86, 0.55)",
            },
         }}
         className="[&_.ant-modal-content]:!rounded-2xl [&_.ant-modal-content]:!overflow-hidden [&_.ant-modal-content]:!p-0 [&_.ant-modal-content]:!shadow-2xl"
      >
         <Row gutter={0} align="stretch">
            <Col
               xs={24}
               sm={9}
               className="relative overflow-hidden h-52 sm:h-auto
                          [&_.ant-image]:!absolute [&_.ant-image]:!inset-0
                          [&_.ant-image-img]:!w-full [&_.ant-image-img]:!h-full [&_.ant-image-img]:!object-cover"
            >
               <Image src={project.image} alt={project.title} preview={false} />
               <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-primary/60 via-primary/20 to-transparent pointer-events-none" />
            </Col>

            <Col xs={24} sm={15} className="flex flex-col">
               <div className="flex-shrink-0 bg-primary px-7 pt-6 pb-5">
                  <Text className="!text-secondary text-[10px] font-bold uppercase tracking-[0.22em] block mb-2">
                     ASBL Residences
                  </Text>
                  <Title level={4} className="!text-white !mb-1 !leading-snug">
                     {project.title}
                  </Title>
                  <Text italic className="!text-white/65 text-sm">
                     {project.subtitle}
                  </Text>
               </div>

               <div className="flex-1 bg-white px-7 pt-5 pb-4 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                     {project.details.map((detail, index) => (
                        <Tag
                           key={detail}
                           icon={HIGHLIGHT_ICONS[index]}
                           className="rounded-full text-sm px-3 py-1 bg-secondary/10 border-secondary/25 !text-secondary font-medium m-0"
                        >
                           {detail}
                        </Tag>
                     ))}
                  </div>
                  <Paragraph className="!text-gray-500 !text-sm !leading-relaxed !mb-0">
                     {project.description}
                  </Paragraph>
               </div>

               <div className="flex-shrink-0 bg-white border-t border-gray-100 px-7 py-4 flex gap-3">
                  <CustomButton type="primary" size="large" className="flex-1 rounded-xl font-semibold">
                     Enquire Now
                  </CustomButton>
                  <CustomButton size="large" onClick={onClose} className="rounded-xl font-semibold">
                     Close
                  </CustomButton>
               </div>
            </Col>
         </Row>
      </CustomModal>
   );
};

export default ProjectModal;
