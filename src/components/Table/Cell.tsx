import React, { createElement } from "react";
import cn from "classnames";

export interface CellProps {
  cellType?: "td" | "th";
  cellClass?: string;
  children?: React.ReactNode | any;
}

const Cell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement> & CellProps
>(function TableCell(props, ref) {
  const { className, children, cellType = "td", cellClass, ...other } = props;

  return createElement(
    cellType,
    {
      className: cn(
        cellClass,
        "px-4 py-3  capitalize group-hover:first-of-type:border-l-4 group-hover:first-of-type:border-black ",
        className
      ),
      ref: ref,
      ...other,
    },
    children
  );
});

export default Cell;
