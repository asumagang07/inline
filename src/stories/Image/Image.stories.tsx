import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "../../components";

const meta: Meta<typeof Image> = {
  component: Image,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Image",
  argTypes: {
    id: {
      defaultValue: "Image",
      type: "string",
    },
    fit: {
      defaultValue: "cover",
      description: "Changes the variation of the element. ",
      options: ["cover", "contain"],
      control: { type: "radio" },
    },
    borderRadius: {
      defaultValue: "default",
      description: "Changes the variation of the element. ",
      options: ["default", "full", "square"],
      control: { type: "radio" },
    },
    size: {
      defaultValue: "default",
      description: "Changes the variation of the element. ",
      options: ["sm", "default", "md", "lg", "auto"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args: any) => <Image {...args} />,
  args: {
    id: "Image",
    fit: "cover",
    src: "https://images.pexels.com/photos/191353/pexels-photo-191353.jpeg?auto=compress&cs=tinysrgb&w=600",
    size: "default",
    borderRadius: "default",
  },
};
