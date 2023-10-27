import { ReactNode } from "react";
import { DefaultColorEnum, DefaultSize } from "../../common/enums";

export interface TButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label?: string;
  children?: ReactNode;
  variant?: "solid" | "outlined" | "flat";
  borderRadius?: "full" | "default" | "square";
  color?: keyof typeof DefaultColorEnum;
  size?: keyof typeof DefaultSize;
}
