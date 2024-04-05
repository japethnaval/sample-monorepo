import React from "react";

export interface FormikInputProps {
  name: string;
  placeholder?: string;
}

export const FormikInput: React.FC<FormikInputProps> = ({ name }) => {
  return <input name={name} />;
};

export default FormikInput;
