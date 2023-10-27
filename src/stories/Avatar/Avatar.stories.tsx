import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../../components";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    size: {
      defaultValue: "default",
      description: "Changes the variation of the element. ",
      options: ["sm", "default", "md", "lg"],
      control: { type: "radio" },
    },
    borderRadius: {
      defaultValue: "full",
      description: "Changes the variation of the element. ",
      options: ["full", "default", "square"],
      control: { type: "radio" },
    },
    color: {
      defaultValue: "blue",
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
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    size: "default",
    color: "blue",
    image:
      "https://images.pexels.com/photos/191340/pexels-photo-191340.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
};

export const Initials: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    ...Default.args,
    size: "default",
    image: "",
    name: "John Doe",
  },
};

export const WithStatus: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    ...Default.args,
    size: "default",
    status: {
      value: "active",
      note: "",
    },
  },
};
