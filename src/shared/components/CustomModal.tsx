import React from "react";
import { Modal } from "antd";
import type { ModalProps } from "antd";

export interface CustomModalProps extends ModalProps {
   children?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ children, ...props }) => {
   return <Modal {...props}>{children}</Modal>;
};

export default CustomModal;
