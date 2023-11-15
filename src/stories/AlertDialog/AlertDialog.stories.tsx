import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog, Button } from "../../components";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/AlertDialog",

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: (args: any) => <AlertDialog {...args} />,
  args: {
    trigger: <Button id="btn" label="Delete Account" />,
  },
};
