import React, { FC, useContext } from "react";
import { TAvatarProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Avatar: FC<TAvatarProps> = (props) => {
  const { image, size = "default", borderRadius = "full", status } = props;

  const {
    styles: {
      avatarStyles: { rootCls, statusCls },
    },
  } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        rootCls.base,
        "flex items-center justify-center ",
        rootCls.sizes[size],
        rootCls.borderRadius[borderRadius]
      )}
    >
      <img
        className={cn(
          "w-full h-full bg-cover",
          rootCls.borderRadius[borderRadius]
        )}
        alt=""
        src={image}
      />
      {status && (
        <span
          className={cn(
            "-top-1 -right-1 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white  rounded-full",
            statusCls.value[status?.value || "active"]
          )}
        >
          {status.note}
        </span>
      )}
    </div>
  );
};

export default Avatar;
