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
      <div
        className="w-96 h-96 p-4 bg-cover"
        // style={{
        //   backgroundImage:
        //     "url(https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80)",
        // }}
      >
        <DatePicker value={startDate} onChange={(date) => setStartDate(date)} />
      </div>
    );
  },
  args: {},
};
