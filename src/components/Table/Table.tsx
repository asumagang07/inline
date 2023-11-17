import React from "react";
import cn from "classnames";
import Header from "./Header";
import Row from "./Row";
import Cell from "./Cell";
import Body from "./Body";

const Table = React.forwardRef<
  HTMLTableElement,
  React.TableHTMLAttributes<HTMLTableElement>
>(function Table(props, ref) {
  const { className, children, ...other } = props;

  return (
    <div className="w-full border p-2 rounded-md">
      <table
        className={cn(
          "w-full text-sm text-left rtl:text-right border-separate border-spacing-x-0 border-spacing-y-2 bg-gray-100 p-2",
          className
        )}
        ref={ref}
        {...other}
      >
        {children}
      </table>
    </div>
  );
});

export default Object.assign(Table, {
  Header,
  Row,
  Cell,
  Body,
});
