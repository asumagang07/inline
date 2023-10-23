import { ReactNode } from "react";
import { TButtonProps } from "../Button";

export interface TCardProps {
  id: string;
  className?: string;
  children?: ReactNode;
  widthFull?: boolean;
  title?: string;
  subTitle?: string;
  thumbnail?: string;
  cardImage?: string;
  description?: string;
  actions?: TButtonProps[];
}
