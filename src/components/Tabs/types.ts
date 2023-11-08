import { ReactNode } from "react";

export interface TTabsProps {
  className?: string;
  items?: TabItemProps[];
}

export interface TabItemProps {
  id?: string;
  label?: string;
  icon?: string | JSX.Element;
  children?: ReactNode;
}
