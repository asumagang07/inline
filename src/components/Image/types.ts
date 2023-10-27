import { useImageProps } from "react-image";

export interface TImageProps extends Pick<useImageProps, "srcList"> {
  id: string;
  className?: string;
  srcList: string | string[];
}
