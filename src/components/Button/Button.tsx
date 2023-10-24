import React, { FC, useContext } from "react";
import { TButtonProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Button: FC<TButtonProps> = (props) => {
  const {
    id,
    children,
    className,
    label,
    variant = "solid",
    borderRadius = "default",
    color = "blue",
  } = props;

  const {
    styles: {
      buttonStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <button
      id={id}
      className={cn(
        "   font-medium  text-sm px-4 py-1.5 text-center mr-2 mb-2 ",
        rootCls.borders[variant],
        rootCls.borderRadius[borderRadius],
        rootCls.variants[variant].colors[color],
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
