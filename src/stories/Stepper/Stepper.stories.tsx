import type { Meta, StoryObj } from "@storybook/react";
import { Button, Stepper, TStepsProps } from "../../components";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    id: {
      defaultValue: "Stepper",
      description:
        "Sets the default value or state of the component (i.e activated or checked or prefilled).",
      type: "string",
    },
  },
};

const stepsData: TStepsProps[] = [
  {
    label: "Create Account",
    status: "completed",
    content: "Here is some step content",
  },
  {
    label: "Verify Amount",
    status: "active",
  },
  {
    label: "Add Payment Method",
    status: "pending",
    content: (
      <div className="">
        <Button id="button" label="Next" />
      </div>
    ),
  },
  {
    label: "Add Payment Method",
    status: "error",
  },
  {
    label: "Add Payment Method",
    status: "pending",
  },
];

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: (args: any) => <Stepper {...args} />,
  args: {
    id: "Stepper",
    steps: stepsData,
  },
};
