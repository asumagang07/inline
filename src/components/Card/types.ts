import { ReactNode } from "react";

export interface TCardProps {
  id: string;
  className?: string;
  children?: ReactNode;
  widthFull?: boolean
  title?: string
  subTitle?: string
  thumbnail?: string
  cardImage?:string
  description?: string
}

