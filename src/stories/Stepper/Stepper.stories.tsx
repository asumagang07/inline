/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { VerticalStepper, TStepsProps } from "../../components";

const meta: Meta<typeof VerticalStepper> = {
  component: VerticalStepper,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Stepper/VerticalStepper",
  argTypes: {
    id: {
      defaultValue: "VerticalStepper",
      description:
        "Sets the default value or state of the component (i.e activated or checked or prefilled).",
      type: "string",
    },
  },
};

const stepsData: TStepsProps[] = [
  {
    label: "Create Account",
    description: "Description 1 here",
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    label: "Verify Amount",
    description: "Description 2 here",
    content:
      " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  },
  {
    label: "Add Payment Method",
    content: (
      <div className="flex flex-col gap-2">
        is simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </div>
    ),
  },
];

export default meta;

type Story = StoryObj<typeof VerticalStepper>;

export const Default: Story = {
  render: (args: any) => <VerticalStepper {...args} />,
  args: {
    id: "VerticalStepper",
    steps: stepsData,
    current: 1,
  },
};
