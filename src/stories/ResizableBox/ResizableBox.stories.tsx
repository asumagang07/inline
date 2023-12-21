/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { ResizableBox } from "../../components";

const meta: Meta<typeof ResizableBox> = {
  component: ResizableBox,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Resizable Box",
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

type Story = StoryObj<typeof ResizableBox>;

export const Default: Story = {
  render: (args: any) => <ResizableBox {...args} />,
  args: {
    color: "purple",
    defaultSize: {
      width: 300,
      height: 300,
    },
    children: (
      <div className="border h-full w-full border-default-900 bg-default-50 flex items-center justify-center text-center">
        Resizable Box
      </div>
    ),
    handle: {
      top: true,
      right: true,
      bottom: true,
      left: true,
      topRight: true,
      bottomRight: true,
      bottomLeft: true,
      topLeft: true,
    },
  },
};
