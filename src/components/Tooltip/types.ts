import { ReactNode } from "react";
import { DefaultColorEnum } from "../../common/enums";
import { TooltipProps } from "@radix-ui/react-tooltip";

export interface ITooltipProps extends TooltipProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum;
  trigger?: ReactNode;
  content?: ReactNode;
  withArrow?: boolean;
}
