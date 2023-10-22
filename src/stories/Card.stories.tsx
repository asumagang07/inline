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
      <p>Contents here</p>
    </Card>
  ),
  args: {
    id: "card",
  },
};
