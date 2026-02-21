import React from "react";
import type { HeaderProps, MenuListProps } from "../type";
import { Col, Divider, Row, Typography, Space } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { CustomDrawer, CustomButton } from "../../../shared/components";
import { loginMenu, menus } from "../constants";

const MenuList: React.FC<MenuListProps> = ({ items, handleClick, textClassName = "", divider = false }) => (
   <>
      {items.map((menu, idx) => (
         <React.Fragment key={menu.name}>
            <Typography.Text className={textClassName} onClick={() => handleClick?.(menu.path)}>
               {menu.label}
            </Typography.Text>
            {divider && idx !== items.length - 1 && <Divider type="vertical" className="!border-gray-300 !mx-0" />}
         </React.Fragment>
      ))}
   </>
);

const Header: React.FC<HeaderProps> = ({ drawerOpen, handleDrawerChange }) => {
   return (
      <>
         <Row className="px-6 py-8 border-b border-gray-200 items-center">
            <Col xs={16} sm={8} md={6} lg={{ span: 6, offset: 2 }} className="flex items-center">
               <img src="/asbl-icon.svg" alt="ASBL Logo" className="inline-block align-middle w-[93px] h-[29px]" />
            </Col>
            {/* Desktop Menus */}
            <Col xs={0} sm={0} md={8} lg={8} className="hidden md:flex">
               <Space size={0} align="center">
                  <MenuList
                     items={menus}
                     handleClick={(path) => (window.location.href = path)}
                     textClassName="mx-4 text-neutral-800 text-2xl cursor-pointer transition-colors duration-200 hover:text-black hover:underline focus:text-black focus:underline"
                     divider
                  />
               </Space>
            </Col>
            {/* Desktop Login Menus */}
            <Col xs={0} sm={0} md={7} lg={7} className="hidden md:flex justify-end w-full">
               <Space size={0} align="center">
                  <MenuList
                     items={loginMenu}
                     handleClick={(path) => (window.location.href = path)}
                     textClassName="mx-4 text-neutral-800 text-2xl cursor-pointer transition-colors duration-200 hover:text-black hover:underline focus:text-black focus:underline"
                     divider
                  />
               </Space>
            </Col>
            {/* Hamburger for mobile */}
            <Col xs={8} sm={16} md={0} lg={0} className="flex md:hidden justify-end items-center !pr-0">
               <Space className="w-full flex justify-end">
                  <CustomButton
                     type="text"
                     icon={<MenuOutlined className="text-2xl" />}
                     onClick={() => handleDrawerChange(true)}
                     aria-label="Open navigation menu"
                     className="md:hidden"
                  />
               </Space>
            </Col>
         </Row>
         {/* Mobile Drawer */}
         <CustomDrawer
            placement="left"
            open={drawerOpen}
            onClose={() => handleDrawerChange(false)}
            closeIcon={<CloseOutlined className="text-xl" />}
            width={260}
            bodyStyle={{ padding: 0 }}
            className="md:hidden"
            title={null}
            styles={{ header: { borderBottom: "none", padding: "1rem 1.5rem" } }}
         >
            <Space direction="vertical" className="w-full px-6 py-4" size={0}>
               <Space className="w-full flex items-center justify-center mb-2">
                  <img src="/asbl-icon.svg" alt="ASBL Logo" className="inline-block align-middle w-[93px] h-[29px]" />
               </Space>
               <MenuList
                  items={menus}
                  handleClick={(path) => {
                     handleDrawerChange(false);
                     window.location.href = path;
                  }}
                  textClassName="block text-neutral-800 text-lg py-2 cursor-pointer transition-colors duration-200 hover:text-black hover:underline focus:text-black focus:underline"
               />
               <Divider className="!my-2 !border-gray-300" />
               <MenuList
                  items={loginMenu}
                  handleClick={(path) => {
                     handleDrawerChange(false);
                     window.location.href = path;
                  }}
                  textClassName="block text-neutral-800 text-lg py-2 cursor-pointer transition-colors duration-200 hover:text-black hover:underline focus:text-black focus:underline"
               />
            </Space>
         </CustomDrawer>
      </>
   );
};

export default Header;
