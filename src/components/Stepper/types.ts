import { ReactNode } from "react";
import { DefaultColorEnum } from "../../common/enums";

export interface TStepperProps {
  id?: string;
  className?: string;
  steps?: TStepsProps[];
  color?: keyof typeof DefaultColorEnum;
}

export interface TStepsProps {
  label?: string;
  status?: keyof typeof Status;
  content?: ReactNode;
}

enum Status {
  "pending",
  "active",
  "progress",
  "completed",
  "error",
  "disabled",
}
