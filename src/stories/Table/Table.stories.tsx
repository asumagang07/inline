import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../components";

const meta: Meta<typeof Table> = {
  component: Table,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args: any) => <Table {...args} />,
  args: {},
};
