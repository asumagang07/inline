import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../../layouts";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Layouts/Sidebar",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  render: (args: any) => (
    <Sidebar {...args}>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Info Sidebar!</span> Change a few things
        up and try submitting again.
      </div>
    </Sidebar>
  ),
  args: {},
};
