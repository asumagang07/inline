import React, { FC, useContext } from "react";
import { TAlertProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Alert: FC<TAlertProps> = (props) => {
  const {
    id = "alert",
    children,
    className,
    icon,
    label,
    borderRadius = "default",
    color = "blue",
    bordered = false,
  } = props;

  const {
    styles: {
      alertStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <div
      id={id}
      className={cn(
        rootCls.base,
        rootCls.colors[color],
        rootCls.borderRadius[borderRadius],
        { [rootCls.borders[color]]: bordered },
        className
      )}
      role="alert"
    >
      {icon}
      {label}
      {children}
    </div>
  );
};

export default Alert;
