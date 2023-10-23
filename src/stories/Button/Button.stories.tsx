import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components";

const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    id: {
      defaultValue: "Button",
      label: "Button",
      type: "string",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    id: "Button",
    label: "Button",
  },
};
