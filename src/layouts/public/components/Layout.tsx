import React from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import type { LayoutProps } from "../type";

const LayoutComponent: React.FC<LayoutProps> = ({}) => {
   return (
      <div className="min-h-screen flex flex-col">
         <Header />
         <Content />
         <Footer />
      </div>
   );
};

export default LayoutComponent;
