import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button style={{ background: "orange" }}>{children}</button>;
};

export default Button;
