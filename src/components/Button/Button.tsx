import React, { FC } from "react";
import { TButtonProps } from "./types";
import cn from "classnames";

const Button: FC<TButtonProps> = (props) => {
  const {
    id,
    children,
    className,
    label,
    variant = "solid",
    borderRadius = "default",
  } = props;
  return (
    <button
      id={id}
      className={cn(
        "   font-medium  text-sm px-4 py-1.5 text-center mr-2 mb-2 ",
        variant === "solid"
          ? "text-white bg-blue-500 hover:bg-blue-600"
          : variant === "outlined"
          ? "text-blue-500 hover:text-white border border-blue-500 hover:bg-blue-600  "
          : "text-blue-500 hover:bg-blue-100",
        borderRadius === "default"
          ? "rounded-sm"
          : borderRadius === "full"
          ? "rounded-full"
          : "rounded-none",

        className
      )}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
