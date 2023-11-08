/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabItemProps } from "../../components";
import { MdDashboard } from "react-icons/md";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Tabs",
  argTypes: {},
};

const items: TabItemProps[] = [
  {
    id: "1",
    label: "Profile",
    icon: <MdDashboard />,
    children: "Children 1",
  },
  {
    id: "2",
    label: "Dashboard",
    icon: <MdDashboard />,
    children: "Children 2",
  },
  {
    id: "3",
    label: "Settings",
    icon: <MdDashboard />,
    children: "Children 3",
  },
];

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args: any) => <Tabs {...args} />,
  args: {
    items: items,
  },
};
