import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => (
    <Card {...args}>
      <p>Card Contents</p>
    </Card>
  ),
  args: {
    id: "card",
    className: "bg-blue-200",
  },
};
