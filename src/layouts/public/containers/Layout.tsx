import React from "react";
import { LayoutComponent } from "../components";
import { useState, useCallback } from "react";

const PublicLayoutContainer: React.FC = () => {
   const [drawerOpen, setDrawerOpen] = useState(false);
   const handleDrawerChange = useCallback((open: boolean) => {
      setDrawerOpen(open);
   }, []);

   return <LayoutComponent drawerOpen={drawerOpen} handleDrawerChange={handleDrawerChange} />;
};

export default PublicLayoutContainer;
