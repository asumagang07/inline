/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Popover } from "../../components";

const meta: Meta<typeof Popover> = {
  component: Popover,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Popover",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Popover>;

const content = (
  <form className="max-w-sm mx-auto">
    <div className="mb-5">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-default-700 "
      >
        Your email
      </label>
      <input
        type="email"
        id="email"
        className="bg-default-50 border border-default-300 text-default-700 text-sm rounded  block w-full p-2.5 "
        placeholder="username@gmail.com"
        required
      />
    </div>
    <div className="mb-5">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-default-700 "
      >
        Your password
      </label>
      <input
        type="password"
        id="password"
        className="bg-default-50 border border-default-300 text-default-700 text-sm rounded  block w-full p-2.5 "
        required
      />
    </div>
    <div className="flex items-start mb-5">
      <div className="flex items-center h-5">
        <input
          id="remember"
          type="checkbox"
          value=""
          className="w-4 h-4 border border-default-300 rounded bg-default-50  "
          required
        />
      </div>
      <label
        htmlFor="remember"
        className="ms-2 text-sm font-medium text-default-700"
      >
        Remember me
      </label>
    </div>
    <Button label="Submit" />
  </form>
);

export const Default: Story = {
  render: (args: any) => <Popover {...args} />,
  args: {
    trigger: <Button label="Popover" />,
    content: content,
  },
};
