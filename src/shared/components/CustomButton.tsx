import React from "react";
import { Button } from "antd";
import type { ButtonProps } from "antd";

export interface CustomButtonProps extends ButtonProps {
  children?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
