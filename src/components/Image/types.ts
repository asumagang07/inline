import { DefaultSize } from "../../common/enums";

export interface TImageProps {
  id: string;
  className?: string;
  src?: any;
  size?: keyof typeof DefaultSize | "auto";
  fit?: "cover" | "contain";
  borderRadius?: "full" | "default" | "square";
}
