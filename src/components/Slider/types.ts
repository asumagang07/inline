import { SliderProps } from "@radix-ui/react-slider";
import { DefaultColorEnum } from "../../common/enums";

export interface ISliderProps extends SliderProps {
  className?: string;
  color?: keyof typeof DefaultColorEnum;
}
