import { ReactNode } from "react";

export interface TButtonProps {
  id: string;
  className?: string;
  children?: ReactNode;
  label?: string;
  variant?: "solid" | "outlined" | "flat";
  borderRadius?: "full" | "default" | "square";
}
