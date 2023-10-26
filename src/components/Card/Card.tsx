import React, { FC, useContext } from "react";
import { TCardProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { Button } from "..";

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
        <div className="min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] rounded-full bg-blue-500"></div>
        <div className={headerCls.title.containerCls}>
          <p className={headerCls.title.titleCls}>{title}</p>
          <p className={headerCls.title.subTitleCls}>{subTitle}</p>
        </div>
      </div>
      <div className={cn(imageCls.base, imageCls.imagePosition[imagePosition])}>
        <img className="w-full h-full bg-cover" src={thumbnail} alt="" />
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
