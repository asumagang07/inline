import React from "react";
import cn from "classnames";

const Body = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(function TableBody(props, ref) {
  const { className, children, ...other } = props;

  return (
    <tbody className={cn(className)} ref={ref} {...other}>
      {children}
    </tbody>
  );
});

export default Body;
