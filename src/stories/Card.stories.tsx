import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components";

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
    title: "Adrian Sumagang",
    subTitle: "UI/UX Developer",
    widthFull: false,
  },
};
