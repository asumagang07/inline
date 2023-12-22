import { ReactNode } from "react";
import { DefaultColorEnum } from "../../common/enums";
import * as RSwitch from "@radix-ui/react-switch";

export interface ISwitchProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum;
  children?: ReactNode;
}

export interface ISwitchRootProps
  extends React.ComponentPropsWithoutRef<typeof RSwitch.Root>,
    ISwitchProps {
  color?: keyof typeof DefaultColorEnum;
}

export interface ISwitchLabelProps {
  className?: string;
  label?: string;
}
