import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar, ISideBarItemProps } from "../../layouts";
import { MdCalendarToday, MdOutlineMenuBook } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { IoCartSharp } from "react-icons/io5";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Layouts/Sidebar",
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

const items: ISideBarItemProps[] = [
  {
    label: "Dashboard",
    icon: <MdOutlineMenuBook />,
  },
  {
    label: "Messages",
    icon: <LuMessageSquare />,
  },
  {
    label: "Order",
    icon: <IoCartSharp />,
  },
  {
    label: "Calendar",
    icon: <MdCalendarToday />,
  },
];

export const Default: Story = {
  render: (args: any) => <Sidebar {...args} />,
  args: {
    items: items,
  },
};
