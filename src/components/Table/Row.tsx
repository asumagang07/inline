import React from "react";
import cn from "classnames";
import styled from "styled-components";

const Row = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(function TableRow(props, ref) {
  const { className, children, ...other } = props;

  return (
    <StyledRow
      className={cn(
        "bg-white border border-gray-200 hover:shadow-lg hover:cursor-pointer my-1 group hover:translate-x-2 transition duration-300 ease-in-out",
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </StyledRow>
  );
});

export default Row;

const StyledRow = styled.tr``;
