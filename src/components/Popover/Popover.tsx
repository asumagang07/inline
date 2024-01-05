import React, { FC } from "react";
import { IPopoverProps } from "./types";
import * as RPopover from "@radix-ui/react-popover";
import cn from "classnames";
import { IoCloseOutline } from "react-icons/io5";

const Popover: FC<IPopoverProps> = (props) => {
  const {
    className,
    children,
    defaultOpen,
    onOpenChange,
    open,
    style,
    trigger,
    closable,
    content,
  } = props;
  return (
    <RPopover.Root
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
    >
      <RPopover.Trigger asChild>{trigger}</RPopover.Trigger>
      <RPopover.Portal>
        <RPopover.Content
          className={cn(
            "rounded p-5 w-[260px] bg-white shadow-[hsl(206_22%_7%_/_35%)_4px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_4px_10px_20px_-15px] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade",
            className
          )}
          style={style}
          sideOffset={5}
        >
          {children}
          {content}
          {closable && (
            <RPopover.Close
              className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center hover:bg-purple-50 text-purple-500 absolute top-[5px] right-[5px] outline-none cursor-default"
              aria-label="Close"
            >
              <IoCloseOutline />
            </RPopover.Close>
          )}
          <RPopover.Arrow className="fill-white" />
        </RPopover.Content>
      </RPopover.Portal>
    </RPopover.Root>
  );
};

export default Popover;
