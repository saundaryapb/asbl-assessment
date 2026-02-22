import React from "react";
import { Projects } from "../../../screens";
import type { ContentProps } from "../type";

/**
 * Content — main content area for the Public layout.
 *
 * Routing note: This application currently has a single page (Projects), so the
 * screen is rendered directly here without a router. If additional screens are
 * added in the future, replace the direct <Projects /> render with a router
 * (e.g. react-router-dom <Routes>) so each path maps to its own screen:
 *
 *   <Routes>
 *     <Route path="/" element={<Projects />} />
 *     <Route path="/story" element={<Story />} />
 *   </Routes>
 */
const Content: React.FC<ContentProps> = () => {
   return (
      <div className="mx-4 my-4 sm:mx-8 sm:my-6 rounded-3xl bg-slate-50/50">
         {/* Single-page app — Projects screen rendered directly. See routing note above. */}
         <Projects />
      </div>
   );
};

export default Content;
