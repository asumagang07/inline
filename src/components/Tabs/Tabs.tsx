/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext, useMemo, useState } from "react";
import { TTabsProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";

const Tabs: FC<TTabsProps> = (props) => {
  const {
    className,
    items,
    defaultActiveTab = 1,
    variant = "compact",
    closable = false,
  } = props;

  const {
    styles: {
      tabStyles: {
        rootCls: { tabs, tablist },
      },
    },
  } = useContext(ThemeContext);

  const [activeTab, setactiveTab] = useState(defaultActiveTab);
  const [tabItems, settabItems] = useState(items);

  const RemoveTab = (id: any) => {
    const rtab = tabItems?.filter((e) => e.id !== id);
    settabItems(rtab);
  };

  const getFilteredTab = useMemo(() => {
    const tabFilter = tabItems?.filter((tab) => {
      return tab?.id === activeTab;
    });
    return tabFilter?.map((item) => {
      return <div className="">{item.children}</div>;
    });
  }, [activeTab]);

  return (
    <div className="flex flex-col">
      <ul
        className={cn(
          tablist.base,
          variant === "compact" ? "gap-x-1" : "",
          className
        )}
      >
        {tabItems?.map((item, index) => (
          <li
            key={index}
            className={cn(
              tabs.base,
              activeTab === item.id
                ? tabs.variants[variant].active
                : tabs.variants[variant].default
            )}
            onClick={(e) => {
              //@ts-ignore
              const element = e.target.tagName;
              if (element.toLowerCase() === "li")
                setactiveTab(item.id ?? index + 1);
            }}
          >
            {item?.icon}
            {item?.label}
            {closable && (
              <Button
                noBaseStyle
                className="btn-close relative z-50"
                onClick={() => RemoveTab(item?.id)}
                icon={<IoMdClose />}
                id={"btn"}
              />
            )}
          </li>
        ))}
      </ul>
      <div className="w-full h-full pt-4">{getFilteredTab}</div>
    </div>
  );
};

export default Tabs;
