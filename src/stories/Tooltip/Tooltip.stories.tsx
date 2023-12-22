/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { HiOutlinePlus } from "react-icons/hi";
import { Button, Tooltip } from "../../components";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Tooltip",
  argTypes: {
    color: {
      defaultValue: "purple",
      description:
        "Property that changes theme/state of the selection i.e. background and text color",
      options: [
        "blue",
        "red",
        "orange",
        "yellow",
        "purple",
        "green",
        "default",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: (args: any) => <Tooltip {...args} />,
  args: {
    color: "default",
    trigger: <Button id="btn" icon={<HiOutlinePlus />} />,
    content: "Add user",
  },
};

export const WithoutArrow: Story = {
  render: (args: any) => <Tooltip {...args} />,
  args: {
    ...Default.args,
    withArrow: false,
  },
};
