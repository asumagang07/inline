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
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args: any) => <Avatar {...args} />,
  args: {
    size: "default",
    image:
      "https://images.pexels.com/photos/191340/pexels-photo-191340.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
