import React from "react";
import type { HeaderProps } from "../type";
import { Col, Divider, Row, Typography, Space } from "antd";
import { loginMenu, menus } from "../constants";

const Header: React.FC<HeaderProps> = ({}) => {
   return (
      <Row className="px-6 py-8 border-b border-gray-200">
         <Col span={6} offset={2}>
            <img src="/asbl-icon.svg" alt="ASBL Logo" className="inline-block align-middle w-[93px] h-[29px]" />
         </Col>
            <Col span={8}>
               <Space size={0} align="center">
                  {menus.map((menu, idx) => (
                     <React.Fragment key={menu.name}>
                        <Typography.Text
                           className="mx-4 text-neutral-800 text-2xl cursor-pointer transition-colors duration-200 hover:text-black hover:underline focus:text-black focus:underline"
                           onClick={() => window.location.href = menu.path}
                        >
                           {menu.label}
                        </Typography.Text>
                        {idx !== menus.length - 1 && (
                           <Divider type="vertical" className="!border-gray-300 !mx-0" />
                        )}
                     </React.Fragment>
                  ))}
               </Space>
            </Col>
            <Col span={7}>
               <Space size={0} align="center" className="justify-end w-full">
                  {loginMenu.map((menu, idx) => (
                     <React.Fragment key={menu.name}>
                        <Typography.Text
                           className="mx-4 text-neutral-800 text-2xl cursor-pointer transition-colors duration-200 hover:text-black hover:underline focus:text-black focus:underline"
                           onClick={() => window.location.href = menu.path}
                        >
                           {menu.label}
                        </Typography.Text>
                        {idx !== loginMenu.length - 1 && (
                           <Divider type="vertical" className="!border-gray-300 !mx-0" />
                        )}
                     </React.Fragment>
                  ))}
               </Space>
            </Col>
      </Row>
   );
};

export default Header;
