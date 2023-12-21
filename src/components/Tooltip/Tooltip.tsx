import React, { FC, useContext } from "react";
import { ITooltipProps } from "./types";
import * as RTooltip from "@radix-ui/react-tooltip";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Tooltip: FC<ITooltipProps> = (props) => {
  const {
    className,
    color = "default",
    trigger,
    content,
    withArrow = true,
    open,
  } = props;

  const {
    styles: {
      tooltipStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <RTooltip.Provider>
      <RTooltip.Root open={open}>
        <RTooltip.Trigger asChild>{trigger}</RTooltip.Trigger>
        <RTooltip.Portal>
          <RTooltip.Content
            className={cn(
              "data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade select-none rounded-sm  py-2 px-3 text-xs leading-none shadow-md will-change-[transform,opacity]",
              rootCls.colors[color],
              className
            )}
            sideOffset={5}
          >
            {content}
            {withArrow && (
              <RTooltip.Arrow className={cn(rootCls.arrowCls.colors[color])} />
            )}
          </RTooltip.Content>
        </RTooltip.Portal>
      </RTooltip.Root>
    </RTooltip.Provider>
  );
};

export default Tooltip;
