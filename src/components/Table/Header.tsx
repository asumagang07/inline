import React from "react";
import cn from "classnames";
import styled from "styled-components";

const Header = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(function TableHeader(props, ref) {
  const { className, children, ...other } = props;

  return (
    <StyledTHead
      className={cn(
        "text-sm text-white  bg-black table-header-group mb-4 ",
        className
      )}
      ref={ref}
      {...other}
    >
      {children}
    </StyledTHead>
  );
});

export default Header;

const StyledTHead = styled.thead``;
