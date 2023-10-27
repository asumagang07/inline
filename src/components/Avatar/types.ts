import { DefaultColorEnum, DefaultSize } from "../../common/enums";

export interface TAvatarProps {
  image?: string;
  size?: keyof typeof DefaultSize;
  borderRadius?: "full" | "default" | "square";
  status?: Status;
  name?: string;
  color?: keyof typeof DefaultColorEnum;
}

export interface Status {
  value?: "active" | "offline" | "busy";
  note?: string;
}
