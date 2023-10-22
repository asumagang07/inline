import React, { FC } from "react";
import { TCardProps } from "./types";
import cn from "classnames";

const Card: FC<TCardProps> = (props) => {
  const { id, className, children } = props;
  return (
    <div
      id={id}
      className={cn(
        "flex flex-col gap-2 p-2 bg-white border rounded-sm shadow-sm",
        className
      )}
    >
      Card <div className={cn("p-2")}>{children}</div>
    </div>
  );
};

export default Card;
