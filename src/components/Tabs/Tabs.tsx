/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import { TTabsProps } from "./types";
import cn from "classnames";

const Tabs: FC<TTabsProps> = (props) => {
  const { className, items } = props;

  return (
    <div className="flex flex-col">
      <ul
        className={cn(
          "flex h-10 flex-wrap  font-medium text-center border-b border-default-200 ",
          className
        )}
      >
        {items?.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center gap-2 px-3 border-r last-of-type:border-r-0 text-default-900"
          >
            {item?.icon}
            {item?.label}
          </li>
        ))}
      </ul>
      <div className="w-full h-full pt-4">
        {items?.map((item) => (
          <>{item?.children}</>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
