import { Enable, ResizableProps } from "re-resizable";
import { ReactNode } from "react";
import { DefaultColorEnum } from "../../common/enums";

export interface IResizableBoxProps extends Omit<ResizableProps, "enable"> {
  className?: string;
  children?: ReactNode;
  handle?: Enable | false;
  color?: keyof typeof DefaultColorEnum;
}
