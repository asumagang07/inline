/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../../components";

const meta: Meta<typeof Switch> = {
  component: Switch,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Switch",
  argTypes: {
    color: {
      defaultValue: "purple",
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

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: (args: any) => (
    <>
      <Switch>
        <Switch.Root {...args}>
          <Switch.Thumb />
        </Switch.Root>
      </Switch>
    </>
  ),
  args: {},
};

export const WithLabel: Story = {
  render: (args: any) => (
    <>
      <Switch {...args}>
        <Switch.Label label="Switch" />
        <Switch.Root {...args}>
          <Switch.Thumb />
        </Switch.Root>
      </Switch>
    </>
  ),
  args: {},
};

export const DefaultChecked: Story = {
  render: (args: any) => (
    <>
      <Switch {...args}>
        <Switch.Label label="Default Checked" />
        <Switch.Root defaultChecked {...args}>
          <Switch.Thumb />
        </Switch.Root>
      </Switch>
    </>
  ),
  args: {},
};

export const Disabled: Story = {
  render: (args: any) => (
    <>
      <Switch {...args}>
        <Switch.Label label="Default Checked" />
        <Switch.Root disabled {...args}>
          <Switch.Thumb />
        </Switch.Root>
      </Switch>
    </>
  ),
  args: {},
};
