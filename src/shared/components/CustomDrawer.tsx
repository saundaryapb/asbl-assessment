import React from "react";
import { Drawer } from "antd";
import type { DrawerProps } from "antd";

export interface CustomDrawerProps extends DrawerProps {
   children?: React.ReactNode;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({ children, ...props }) => {
   return <Drawer {...props}>{children}</Drawer>;
};

export default CustomDrawer;
