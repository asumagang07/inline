import type { Meta, StoryObj } from "@storybook/react";
import { Image } from "../../components";

const meta: Meta<typeof Image> = {
  component: Image,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    // size: {
    //   defaultValue: "default",
    //   description: "Changes the variation of the element. ",
    //   options: ["sm", "default", "md", "lg"],
    //   control: { type: "radio" },
    // },
    // borderRadius: {
    //   defaultValue: "full",
    //   description: "Changes the variation of the element. ",
    //   options: ["full", "default", "square"],
    //   control: { type: "radio" },
    // },
    // color: {
    //   defaultValue: "blue",
    //   description:
    //     "Property that changes theme/state of the selection i.e. background and text color",
    //   options: [
    //     "blue",
    //     "red",
    //     "orange",
    //     "yellow",
    //     "purple",
    //     "green",
    //     "default",
    //   ],
    //   control: { type: "select" },
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  render: (args: any) => <Image {...args} />,
  args: {
    srcList:
      "https://images.pexels.com/photos/191353/pexels-photo-191353.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
};
