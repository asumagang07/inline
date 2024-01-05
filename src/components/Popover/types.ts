import { PopoverProps } from "@radix-ui/react-popover";
import { CSSProperties, ReactNode } from "react";

export interface IPopoverProps extends PopoverProps {
  className?: string;
  style?: CSSProperties;
  trigger?: ReactNode;
  closable?: boolean;
  content?: ReactNode;
}
