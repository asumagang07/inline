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
    size = "default",
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
        rootCls.base,
        "px-2",
        rootCls.sizes[size],
        rootCls.borders[variant],
        rootCls.borderRadius[borderRadius],
        rootCls.variants[variant].colors[color],
        rootCls.hoverable.variants[variant].colors[color],
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
