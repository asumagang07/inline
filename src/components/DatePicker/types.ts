// import ReactDatePicker from "react-datepicker";

export interface IDatePickerProps {
  className?: string;
  value?: Date | null | undefined;
  onChange?: (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined
  ) => void;
}
