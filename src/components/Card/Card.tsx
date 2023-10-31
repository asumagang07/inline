import React, { FC, useContext } from "react";
import { TCardProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Avatar, Button, Image } from "..";

const Card: FC<TCardProps> = (props) => {
  const {
    id,
    className,
    children,
    widthFull = true,
    title,
    thumbnail,
    actions,
    subTitle,
    imagePosition = "center",
  } = props;

  const {
    styles: {
      cardStyles: { rootCls, headerCls, imageCls },
    },
  } = useContext(ThemeContext);

  return (
    <div
      id={id}
      className={cn(
        rootCls.base,
        { [rootCls.notWidthFull]: !widthFull },
        className
      )}
    >
      <div
        className={cn(headerCls.base, headerCls.imagePosition[imagePosition])}
      >
        <Avatar
          id="avatar"
          image="https://images.pexels.com/photos/191340/pexels-photo-191340.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        <div className={headerCls.title.containerCls}>
          <p className={headerCls.title.titleCls}>{title}</p>
          <p className={headerCls.title.subTitleCls}>{subTitle}</p>
        </div>
      </div>
      <div className={cn(imageCls.base, imageCls.imagePosition[imagePosition])}>
        <Image
          id={"card-thumbnail"}
          src={thumbnail}
          size="auto"
          borderRadius="square"
        />
      </div>
      <div className={cn("flex flex-col gap-2 p-3 text-sm")}>
        {children}
        <div className="flex gap-1">
          {actions?.map((action) => (
            <Button
              id={action?.id}
              size="sm"
              key={action?.id}
              variant={action?.variant}
              label={action?.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
