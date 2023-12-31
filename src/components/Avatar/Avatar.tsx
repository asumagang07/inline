import React, { FC, useContext } from "react";
import { TAvatarProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { getInitials } from "./utils";
import { Image } from "../Image";
import { BiSolidUser } from "react-icons/bi";

const Avatar: FC<TAvatarProps> = (props) => {
  const {
    id = "avatar",
    image,
    size = "default",
    borderRadius = "full",
    status,
    name,
    color = "purple",
  } = props;

  const {
    styles: {
      avatarStyles: { rootCls, statusCls, initialCls },
    },
  } = useContext(ThemeContext);

  const renderInitial = () => {
    if (image) return null;

    if (!name) return null;

    const initials = getInitials(name);

    return (
      <span
        className={cn(
          initialCls.base,
          initialCls.size[size],
          rootCls.colors[color],
          rootCls.borderRadius[borderRadius]
        )}
      >
        {initials}
      </span>
    );
  };

  const renderImage = () => {
    if (!image) return null;

    return (
      <Image
        id={"avatar-image"}
        src={image}
        size="auto"
        borderRadius={borderRadius}
      />
    );
  };

  const renderDefaultView = () => {
    if (image) return null;

    if (name) return null;

    return (
      <div
        className={cn(
          initialCls.base,
          initialCls.size[size],
          rootCls.colors[color],
          rootCls.borderRadius[borderRadius]
        )}
      >
        <BiSolidUser />
      </div>
    );
  };

  return (
    <div
      id={id}
      className={cn(
        rootCls.base,
        "flex items-center justify-center ",
        rootCls.sizes[size],
        rootCls.borderRadius[borderRadius]
      )}
    >
      {renderImage()}
      {renderInitial()}
      {renderDefaultView()}
      {status?.value && (
        <span
          className={cn(
            borderRadius === "full" && (size === "md" || size === "lg")
              ? "top-0 right-0"
              : "-top-1 -right-1",
            statusCls.base,
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
