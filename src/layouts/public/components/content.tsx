import React from "react";
import { Projects } from "../../../screens";
import type { ContentProps } from "../type";

const Content: React.FC<ContentProps> = () => {
   return (
      <div className="mx-4 my-4 sm:mx-8 sm:my-6 rounded-3xl bg-slate-50/50">
         <Projects />
      </div>
   );
};

export default Content;
