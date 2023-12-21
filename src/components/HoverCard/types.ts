import { HoverCardProps } from "@radix-ui/react-hover-card";
import { ReactNode } from "react";

export interface THoverCardProps extends HoverCardProps {
  className?: string;
  withArrow?: boolean;
  trigger?: ReactNode;
}
