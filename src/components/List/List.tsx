import React, { FC } from "react";
import { ILIListProps, IULListProps } from "./types";
import cn from "classnames";

const List = React.forwardRef<HTMLUListElement, IULListProps>((props, ref) => {
  const { className, style, children, variant = "default" } = props;
  return (
    <ul
      ref={ref}
      className={cn(
        variant === "default"
          ? "list-disc marker:text-lg"
          : "list-decimal marker:font-medium",
        "marker:text-purple-500 flex-1 flex flex-wrap p-2 gap-x-8 gap-y-1 text-base flex-col",
        className
      )}
      style={style}
    >
      {children}
    </ul>
  );
});

const ListItem: FC<ILIListProps> = (props) => {
  const { className, style, children } = props;

  return (
    <li className={cn("", className)} style={style}>
      {children}
    </li>
  );
};

export default Object.assign(List, {
  Item: ListItem,
});
