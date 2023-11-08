import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../components";
import { PiWarningFill } from "react-icons/pi";

const meta: Meta<typeof Alert> = {
  component: Alert,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Alert",
  argTypes: {
    id: {
      defaultValue: "Alert",
      description:
        "Sets the default value or state of the component (i.e activated or checked or prefilled).",
      type: "string",
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
    bordered: {
      defaultValue: false,
      description: "",
      options: [true, false],
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </div>
    </Alert>
  ),
  args: {
    id: "alert",
    color: "blue",
    bordered: false,
    borderRadius: "default",
  },
};

export const Bordered: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </div>
    </Alert>
  ),
  args: {
    ...Default.args,
    bordered: true,
  },
};

export const WithIcon: Story = {
  render: (args: any) => (
    <Alert {...args}>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </div>
    </Alert>
  ),
  args: {
    ...Default.args,
    icon: <PiWarningFill />,
  },
};

export const PlayAllProps: Story = {
  render: (args: any) => (
    <div className="flex flex-col gap-4">
      <Alert {...args} color="blue">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert {...args} color="purple">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert {...args} color="green">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert {...args} color="red">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert {...args} color="orange">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert {...args} color="yellow">
        Info alert! Change a few things up and try submitting again.
      </Alert>
      <Alert {...args} color="default">
        Info alert! Change a few things up and try submitting again.
      </Alert>
    </div>
  ),
  args: {
    ...Default.args,
    icon: <PiWarningFill />,
  },
};
