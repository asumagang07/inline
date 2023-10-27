import { DefaultSize } from "../../common/enums";

export interface TAvatarProps {
  image?: string;
  size?: keyof typeof DefaultSize;
  borderRadius?: "full" | "default" | "square";
  status?: Status;
}

export interface Status {
  value?: "active" | "offline" | "busy";
  note?: string;
}
