// import ReactDatePicker from "react-datepicker";

import { ReactDatePickerProps } from "react-datepicker";

export interface IDatePickerProps
  extends Pick<ReactDatePickerProps, "onChange"> {
  className?: string;
  value?: Date | null | undefined;
}
