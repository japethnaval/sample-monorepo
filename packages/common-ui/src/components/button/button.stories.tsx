import type { Meta } from "@storybook/react";
import { Button as UIButton } from "./button.component";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export

const meta = {
  title: "Example/Button",
  component: UIButton,
} satisfies Meta<typeof UIButton>;

export const Button = () => {
  return <UIButton>I am a Button</UIButton>;
};
export default meta;
