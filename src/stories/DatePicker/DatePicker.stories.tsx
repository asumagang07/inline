/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { DatePicker } from "../../components";
import { useState } from "react";

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Fields/Date Picker",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: (args: any) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    return (
      <DatePicker value={startDate} onChange={(date) => setStartDate(date)} />
    );
  },
  args: {},
};
