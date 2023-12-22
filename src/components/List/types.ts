import { CSSProperties, ReactNode } from "react";

export interface IULListProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  variant?: "default" | "decimal";
}

export interface ILIListProps extends Omit<IULListProps, "variant"> {}
