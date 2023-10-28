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
    icon,
    variant = "solid",
    borderRadius = "default",
    color = "blue",
    size = "default",
    noBaseStyle = false,
    ...rest
  } = props;

  const {
    styles: {
      buttonStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  const buttonClasses = cn(
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
  );

  return (
    <button
      {...rest}
      id={id}
      className={cn(noBaseStyle ? className : buttonClasses)}
      onClick={rest.onClick}
    >
      {icon}
      {label}
      {children}
    </button>
  );
};

export default Button;
