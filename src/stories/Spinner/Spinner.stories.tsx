/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "../../components";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Spinner",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args: any) => <Spinner {...args} />,
  args: {},
};
