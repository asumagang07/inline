import type { Meta, StoryObj } from "@storybook/react";
import { Card, TButtonProps } from "../../components";
import { actions } from "./data";

const meta: Meta<typeof Card> = {
  component: Card,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    id: {
      defaultValue: "card",
      description:
        "Sets the default value or state of the component (i.e activated or checked or prefilled).",
      type: "string",
    },
    imagePosition: {
      defaultValue: "center",
      description: "Changes the variation of the element. ",
      options: ["top", "center", "bottom"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args: any) => (
    <Card {...args}>
      <p>
        The content displayed on a card is about a single topic, must be easy
        for users to quickly scan through important information and take action.
      </p>
    </Card>
  ),
  args: {
    id: "card",
    title: "Title goes here",
    subTitle: "Subtitle text",
    widthFull: false,
    actions: actions as TButtonProps[],
    thumbnail:
      "https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png",
  },
};

export const ImageTop: Story = {
  render: (args: any) => (
    <Card {...args}>
      <p>
        The content displayed on a card is about a single topic, must be easy
        for users to quickly scan through important information and take action.
      </p>
    </Card>
  ),
  args: {
    ...Default.args,
    imagePosition: "top",
  },
};
