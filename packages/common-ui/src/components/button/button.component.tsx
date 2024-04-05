import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button style={{ background: "green" }}>{children}</button>;
};

export default Button;
