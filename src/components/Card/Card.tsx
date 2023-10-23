import React, { FC, useContext } from "react";
import { TCardProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Card: FC<TCardProps> = (props) => {
  const {
    id,
    className,
    children,
    widthFull = true,
    title,
    thumbnail,
    subTitle,
    description,
  } = props;

  const {
    styles: { cardStyles },
  } = useContext(ThemeContext);

  return (
    <div
      id={id}
      className={cn(
        widthFull ? "flex" : "inline-flex min-w-[300px] max-w-[300px]",
        cardStyles.base,
        className
      )}
    >
      <div className="flex flex-row items-center gap-2  p-3">
        <div className="min-w-[2rem] min-h-[2rem] max-w-[2rem] max-h-[2rem] rounded-full bg-blue-500"></div>
        <div className="flex flex-col">
          <p className="font-bold">{title}</p>
          <p className="text-xs text-opacity-40">{subTitle}</p>
        </div>
      </div>
      <div className="flex relative w-full min-h-[8rem] bg-gray-300">
        <img
          className="w-full h-full bg-cover"
          src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className={cn("p-3 text-sm")}>{children}</div>
    </div>
  );
};

export default Card;
