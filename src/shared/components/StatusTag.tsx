import React from "react";
import { Tag } from "antd";
import type { TagProps } from "antd";

interface StatusTagProps extends Omit<TagProps, "children"> {
   label: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ label, ...props }) => (
   <Tag className="text-xs font-semibold m-0 rounded-full" {...props}>
      {label}
   </Tag>
);

export default StatusTag;
