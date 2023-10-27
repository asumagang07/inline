import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components";

const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    id: {
      defaultValue: "Button",
      label: "Button",
      type: "string",
    },
    variant: {
      defaultValue: "solid",
      description: "Changes the variation of the element. ",
      options: ["solid", "outlined", "flat"],
      control: { type: "select" },
    },
    color: {
      defaultValue: "blue",
      description:
        "Property that changes theme/state of the selection i.e. background and text color",
      options: [
        "blue",
        "red",
        "orange",
        "yellow",
        "purple",
        "green",
        "default",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: (args: any) => (
    <Button {...args} onClick={() => console.log("Clicked")} />
  ),
  args: {
    id: "Button",
    label: "Button",
    variant: "solid",
    borderRadius: "default",
    color: "blue",
    size: "default",
  },
};

export const Outlined: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    ...Default.args,
    variant: "outlined",
  },
};

export const Flat: Story = {
  render: (args: any) => <Button {...args} />,
  args: {
    ...Default.args,
    variant: "flat",
  },
};
