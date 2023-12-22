/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../components";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Spinner",
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
    size: {
      defaultValue: 25,
    },
    ray_height: {
      defaultValue: 5,
    },
    ray_width: {
      defaultValue: 5,
    },
    ray_radius: {
      defaultValue: 50,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args: any) => <Spinner {...args} />,
  args: {
    color: "purple",
    size: 25,
    ray_height: 5,
    ray_width: 5,
    ray_radius: 50,
  },
};
