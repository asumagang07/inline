import { ReactNode } from "react";

export interface TAccordionProps {
  className?: string;
  items?: TAccordionItemProps[];
  allowZeroExpanded?: boolean;
  preExpanded?: string[];
}

export interface TAccordionItemProps {
  id?: string | number;
  className?: string;
  heading?: string;
  itemIcon?: string | JSX.Element;
  onClick?: () => void;
  content?: ReactNode | string;
}
