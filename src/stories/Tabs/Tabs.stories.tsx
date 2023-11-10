/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "../../components";
import { items, itemsWithDisabledTab, itemsWithIcon } from "./data";
// import { MdDashboard } from "react-icons/md";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Tabs",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    items: items,
    variant: "compact",
    defaultActiveTab: 1,
  },
};

export const Flat: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    variant: "flat",
  },
};

export const Compact: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    variant: "compact",
  },
};

export const DefaultActiveTab: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    defaultActiveTab: 3,
  },
};

export const Closable: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    closable: true,
  },
};

export const WithIcon: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    items: itemsWithIcon,
  },
};

export const WithDisabledItem: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    items: itemsWithDisabledTab,
  },
};

export const Draggable: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    ...Default.args,
    items: itemsWithIcon,
    draggable: true,
  },
};
