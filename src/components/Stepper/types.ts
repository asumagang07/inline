import { ReactNode } from "react";
import { DefaultColorEnum } from "../../common/enums";

export interface TStepperProps {
  id?: string;
  className?: string;
  steps?: TStepsProps[];
  color?: keyof typeof DefaultColorEnum;
  current?: number;
}

export interface TStepsProps {
  label?: string;
  description?: string;
  content?: ReactNode;
}
