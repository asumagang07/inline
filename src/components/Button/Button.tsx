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
    ...rest
  } = props;

  const {
    styles: {
      buttonStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <button
      {...rest}
      id={id}
      className={cn(
        rootCls.base,
        rootCls.spacing.icon_and_or_label[size],
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
      onClick={rest.onClick}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
