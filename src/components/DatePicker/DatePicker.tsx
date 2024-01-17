import React, { FC } from "react";
import DatePicker from "react-datepicker";
import { IDatePickerProps } from "./types";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineCalendarMonth } from "react-icons/md";
import cn from "classnames";

const IDatePicker: FC<IDatePickerProps> = (props) => {
  const { className, onChange, value } = props;

  return (
    <div className="inline-flex gap-2 items-center justify-center">
      <MdOutlineCalendarMonth />
      <DatePicker
        selected={value}
        className={cn("border border-default-500", className)}
        onChange={() => onChange}
      />
    </div>
  );
};

export default IDatePicker;
