import { ReactNode } from "react";
import { DefaultBorderRadius, DefaultColorEnum } from "../../common/enums";

export interface TAlertProps {
  id: string;
  icon?: string | JSX.Element;
  children?: ReactNode;
  label?: string;
  className?: string;
  borderRadius?: keyof typeof DefaultBorderRadius;
  bordered?: boolean;
  color?: keyof typeof DefaultColorEnum;
}
