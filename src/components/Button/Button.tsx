import React, { FC } from "react";
import { TButtonProps } from "./types";
import cn from "classnames";

const Button: FC<TButtonProps> = (props) => {
  const { id, children, className, label } = props;
  return (
    <button
      id={id}
      className={cn(
        "text-white bg-blue-500 hover:bg-blue-600  font-medium rounded-full text-sm px-4 py-1.5 text-center mr-2 mb-2 ",
        className
      )}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
