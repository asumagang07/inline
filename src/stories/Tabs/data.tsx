import { TabItemProps } from "../../components";
import { MdDashboard } from "react-icons/md";

export const items: TabItemProps[] = [
  {
    id: 1,
    label: "Profile",
    children: "Children 1",
  },
  {
    id: 2,
    label: "Dashboard",
    children: "Children 2",
  },
  {
    id: 3,
    label: "Settings",
    children: "Children 3",
  },
];

export const itemsWithIcon: TabItemProps[] = [
  {
    id: 1,
    label: "Profile",
    icon: <MdDashboard />,
    children: "Children 1",
  },
  {
    id: 2,
    label: "Dashboard",
    icon: <MdDashboard />,
    children: "Children 2",
  },
  {
    id: 3,
    label: "Settings",
    icon: <MdDashboard />,
    children: "Children 3",
  },
];

export const itemsWithDisabledTab: TabItemProps[] = [
  {
    id: 1,
    label: "Profile",
    children: "Children 1",
  },
  {
    id: 2,
    label: "Dashboard",
    disabled: true,
    children: "Children 2",
  },
  {
    id: 3,
    label: "Settings",
    children: "Children 3",
  },
];
