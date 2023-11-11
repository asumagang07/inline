import { DefaultColorEnum, DefaultSize } from "../../common/enums";

export interface TSpinnerProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum | "white";
  size?: number;
  ray_height?: number;
  ray_width?: number;
  ray_radius?: number;
}
