/* eslint-disable no-useless-computed-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useContext, useMemo, useState } from "react";
import { TTabsProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { IoMdClose } from "react-icons/io";
import { Button } from "../Button";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Tabs: FC<TTabsProps> = (props) => {
  const {
    className,
    items,
    defaultActiveTab = 1,
    variant = "compact",
    closable = false,
    draggable = false,
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

  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;
    const draggableitems = Array.from(tabItems ?? []);
    const [dragtab] = draggableitems.splice(result.source.index, 1);
    draggableitems.splice(result.destination.index, 0, dragtab);

    settabItems(draggableitems);
  };

  const getFilteredTab = useMemo(() => {
    const tabFilter = tabItems?.filter((tab) => {
      return tab?.id === activeTab;
    });
    return tabFilter?.map((item) => {
      return <div className="">{item.children}</div>;
    });
  }, [activeTab, tabItems]);

  return (
    <div className="flex flex-col">
      {draggable ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="tablist" direction="horizontal">
            {(provided) => (
              <ul
                className={cn(
                  "tablist",
                  tablist.base,
                  variant === "compact" ? "gap-x-1" : "",
                  className
                )}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {tabItems?.map((item, index) => (
                  <Draggable
                    key={index}
                    draggableId={String(index)}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cn(
                          tabs.base,
                          {
                            ["drop-shadow-lg cursor-move"]: snapshot.isDragging,
                          },
                          item.disabled && variant === "compact"
                            ? "border border-default-300 bg-default-50 rounded-t-md cursor-not-allowed pointer-events-none text-default-400"
                            : item.disabled && variant === "flat"
                            ? "border-b-2 border-b-transparent cursor-not-allowed pointer-events-none text-default-400"
                            : activeTab === item.id
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
                            className="btn-close relative"
                            onClick={() => RemoveTab(item?.id)}
                            icon={<IoMdClose />}
                          />
                        )}
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
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
                item.disabled && variant === "compact"
                  ? "border border-default-300 bg-default-50 rounded-t-md cursor-not-allowed pointer-events-none text-default-400"
                  : item.disabled && variant === "flat"
                  ? "border-b-2 border-b-transparent cursor-not-allowed pointer-events-none text-default-400"
                  : activeTab === item.id
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
                  className="btn-close relative"
                  onClick={() => RemoveTab(item?.id)}
                  icon={<IoMdClose />}
                />
              )}
            </li>
          ))}
        </ul>
      )}
      <div className="w-full h-full pt-4">{getFilteredTab}</div>
    </div>
  );
};

export default Tabs;
