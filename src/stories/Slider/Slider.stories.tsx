/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "../../components";

const meta: Meta<typeof Slider> = {
  component: Slider,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Slider",
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

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: (args: any) => <Slider {...args} />,
  args: {
    color: "purple",
    defaultValue: [20],
  },
};
