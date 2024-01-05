import React, { FC, useState } from "react";
import { ISidebarProps } from "./types";
//@ts-ignore
import logoimg from "../../../public/submark_3x.png";
import { Button, Image, Tooltip } from "../../components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import cn from "classnames";

const Sidebar: FC<ISidebarProps> = (props) => {
  const {
    children,
    logo = logoimg,
    header = "Logo Name",
    subHeader = "subcontent here",
    items,
    position = "left",
    expanded = true,
  } = props;

  const [sidebar_expanded, setsidebar_expanded] = useState(expanded);

  return (
    <div
      className={cn(
        "fixed  top-0  min-h-screen bg-white shadow-lg p-3 flex flex-col justify-start items-start ease-in-out duration-200",
        position === "left" ? "left-0" : "right-0",
        sidebar_expanded ? "w-60" : "w-20"
      )}
    >
      <div className={cn("h-20 w-full flex items-center relative border-b")}>
        <div
          className={cn(
            "w-full flex items-center gap-3",
            sidebar_expanded ? "justify-start" : "justify-center"
          )}
          onClick={() => setsidebar_expanded(!sidebar_expanded)}
        >
          <Image
            id={""}
            size="auto"
            className="!h-10 !w-10"
            fit="contain"
            src={logo}
          />
          <div
            className={cn(
              "flex-nowrap ease-in-out duration-200",
              sidebar_expanded ? "flex flex-col" : "hidden"
            )}
          >
            <h1 className="font-semibold text-lg">{header}</h1>
            <p className="text-xs">{subHeader}</p>
          </div>
        </div>
        {/* <Button
          size="sm"
          className="absolute -right-6"
          icon={sidebar_expanded ? <FaChevronLeft /> : <FaChevronRight />}
          onClick={() => setsidebar_expanded(!sidebar_expanded)}
        /> */}
      </div>
      {/* ///// List */}
      <ul className="w-full flex flex-col mt-3">
        {items?.map((item, index) => {
          return (
            <>
              {sidebar_expanded ? (
                <li
                  key={index}
                  className={cn(
                    "min-h-12 flex items-center gap-2 hover:bg-purple-50 p-3",
                    sidebar_expanded ? "justify-start" : "justify-center",
                    item.className
                  )}
                  onClick={item.onClick}
                >
                  <div className="text-lg">{item.icon}</div>
                  {sidebar_expanded && item.label}
                </li>
              ) : (
                <Tooltip
                  content={item.label}
                  trigger={
                    <li
                      key={index}
                      className={cn(
                        "min-h-12 flex items-center gap-2 hover:bg-purple-50 py-2 px-3",
                        sidebar_expanded ? "justify-start" : "justify-center",
                        item.className
                      )}
                      onClick={item.onClick}
                    >
                      <div className="text-lg">{item.icon}</div>
                      {sidebar_expanded && item.label}
                    </li>
                  }
                />
              )}
            </>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default Sidebar;
