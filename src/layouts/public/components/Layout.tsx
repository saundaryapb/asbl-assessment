import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import type { LayoutProps } from "../type";
import { Row } from "antd";

const LayoutComponent: React.FC<LayoutProps> = ({ drawerOpen, handleDrawerChange }) => {
   return (
      <Row className="min-h-screen flex flex-col bg-white" style={{ flexDirection: "column" }}>
         <Header drawerOpen={drawerOpen} handleDrawerChange={handleDrawerChange} />
         <Content />
         <Footer />
      </Row>
   );
};

export default LayoutComponent;
