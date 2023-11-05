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
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    label: "Verify Amount",
    status: "active",
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    label: "Add Payment Method",
    status: "pending",
    content: (
      <div className="flex flex-col gap-2">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
        <Button id="button" size="sm" label="Next" />
      </div>
    ),
  },
  {
    label: "Add Payment Method",
    status: "error",
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    label: "Add Payment Method",
    status: "disabled",
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
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
