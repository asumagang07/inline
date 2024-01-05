import { ReactNode } from "react";

export interface ISidebarProps {
  children?: ReactNode;
  logo?: string;
  header?: string;
  subHeader?: string;
  expanded?: boolean;
  items?: ISideBarItemProps[];
  position?: "left" | "right";
}

export interface ISideBarItemProps {
  className?: string;
  label?: string;
  icon?: string | JSX.Element;
  onClick?: () => void;
}
