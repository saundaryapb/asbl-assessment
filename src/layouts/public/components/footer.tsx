import React from "react";
import { Row, Col, Typography, Space, Divider, Flex } from "antd";
import type { FooterProps } from "../type";
import { footerColumns, footerSocialLinks, footerLegalLinks, SOCIAL_ICONS } from "../constants";

const { Title, Text, Link } = Typography;

const Footer: React.FC<FooterProps> = () => {
   const year = new Date().getFullYear();
   return (
      <footer className="bg-primary">
         <div className="max-w-6xl mx-auto px-8 pt-14 pb-10">
            <Row gutter={[40, 48]}>
               <Col xs={24} md={6}>
                  <Space direction="vertical" size={20} className="w-full">
                     <img
                        src="/asbl-icon.svg"
                        alt="ASBL"
                        className="h-7"
                        style={{ filter: "brightness(0) invert(1)" }}
                     />
                     <Text className="!text-white/55 text-sm leading-relaxed block max-w-[240px]">
                        Building extraordinary living experiences across Hyderabad — where design meets lifestyle.
                     </Text>
                     <Flex gap={10}>
                        {footerSocialLinks.map((social) => (
                           <Link
                              key={social.name}
                              href={social.href}
                              aria-label={social.label}
                              className="inline-flex items-center justify-center w-9 h-9 rounded-full
                                         bg-white/10 !text-white/70 text-base
                                         hover:!bg-secondary hover:!text-white transition-all duration-200"
                           >
                              {SOCIAL_ICONS[social.name]}
                           </Link>
                        ))}
                     </Flex>
                  </Space>
               </Col>

               {footerColumns.map((column) => (
                  <Col xs={12} sm={8} md={6} key={column.title}>
                     <Space direction="vertical" size={16} className="w-full">
                        <Title level={5} className="!text-white !mb-0">
                           {column.title}
                        </Title>
                        <Space direction="vertical" size={10} className="w-full">
                           {column.links.map((link) => (
                              <Link
                                 key={link.name}
                                 href={link.path}
                                 className="!text-white/50 hover:!text-secondary text-sm !block transition-colors duration-150"
                              >
                                 {link.label}
                              </Link>
                           ))}
                        </Space>
                     </Space>
                  </Col>
               ))}
            </Row>
         </div>

         <Divider className="!border-white/10 !my-0" />

         <div className="max-w-6xl mx-auto px-8 py-5">
            <Row justify="space-between" align="middle" gutter={[0, 8]}>
               <Col xs={24} sm={12}>
                  <Text className="!text-white/35 text-xs">© {year} ASBL. All rights reserved.</Text>
               </Col>
               <Col xs={24} sm={12}>
                  <Flex gap={12} align="center" className="mt-1 sm:justify-end">
                     {footerLegalLinks.map((link, idx) => (
                        <React.Fragment key={link.name}>
                           {idx > 0 && <Text className="!text-white/20 text-xs">·</Text>}
                           <Link
                              href={link.path}
                              className="!text-white/35 hover:!text-white/70 text-xs transition-colors"
                           >
                              {link.label}
                           </Link>
                        </React.Fragment>
                     ))}
                  </Flex>
               </Col>
            </Row>
         </div>
      </footer>
   );
};

export default Footer;
