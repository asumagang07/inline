import React, { FC, useContext } from "react";
import { IResizableBoxProps } from "./types";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Resizable } from "re-resizable";
import cn from "classnames";

const ResizableBox: FC<IResizableBoxProps> = (props) => {
  const {
    className,
    children,
    minWidth = 100,
    minHeight = 100,
    color = "purple",
    defaultSize = {
      width: "auto",
      height: "auto",
    },
    handle = {
      top: false,
      right: false,
      bottom: true,
      left: false,
      topRight: false,
      bottomRight: false,
      bottomLeft: false,
      topLeft: false,
    },
  } = props;

  const {
    styles: {
      resizableBoxStyles: { handleCls, colors },
    },
  } = useContext(ThemeContext);

  return (
    <Resizable
      className={(cn("relative"), className)}
      defaultSize={defaultSize}
      enable={handle}
      minWidth={minWidth}
      minHeight={minHeight}
      handleClasses={{
        top: cn(handleCls.top.base, handleCls.top.colors[color]),
        right: cn(handleCls.right.base, handleCls.right.colors[color]),
        bottom: cn(handleCls.bottom.base, handleCls.bottom.colors[color]),
        left: cn(handleCls.left.base, handleCls.left.colors[color]),
        topRight: cn(handleCls.topRight.base, handleCls.topRight.colors[color]),
        topLeft: cn(handleCls.topLeft.base, handleCls.topLeft.colors[color]),
        bottomRight: cn(
          handleCls.bottomRight.base,
          handleCls.bottomRight.colors[color]
        ),
        bottomLeft: cn(
          handleCls.bottomLeft.base,
          handleCls.bottomLeft.colors[color]
        ),
      }}
    >
      {children}
    </Resizable>
  );
};

export default ResizableBox;
