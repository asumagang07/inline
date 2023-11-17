import type { Meta, StoryObj } from "@storybook/react";
import { Modal, Button } from "../../components";

const meta: Meta<typeof Modal> = {
  component: Modal,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Modal",

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args: any) => <Modal {...args} />,
  args: {
    trigger: <Button id="btn" label="Delete Account" />,
    content: <div className="">Content Here.</div>,
  },
};
