import { ReactNode } from "react";
import { DefaultColorEnum, DefaultSize } from "../../common/enums";

export interface TButtonProps {
  id: string;
  className?: string;
  children?: ReactNode;
  label?: string;
  variant?: "solid" | "outlined" | "flat";
  borderRadius?: "full" | "default" | "square";
  color?: keyof typeof DefaultColorEnum;
  size?: keyof typeof DefaultSize;
}
