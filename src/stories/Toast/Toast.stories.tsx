import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../../components";

const meta: Meta<typeof Toast> = {
  component: Toast,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Toast",

  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args: any) => <Toast {...args} />,
  args: {},
};
