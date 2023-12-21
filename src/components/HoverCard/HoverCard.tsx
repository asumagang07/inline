import React, { FC, useContext } from "react";
import { THoverCardProps } from "./types";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import * as RHoverCard from "@radix-ui/react-hover-card";
import cn from "classnames";

const HoverCard: FC<THoverCardProps> = (props) => {
  const {
    className,
    children,
    defaultOpen,
    open,
    withArrow = true,
    trigger,
  } = props;

  const {
    styles: {
      hoverCardStyles: { content, arrow },
    },
  } = useContext(ThemeContext);

  return (
    <RHoverCard.Root defaultOpen={defaultOpen} open={open}>
      <RHoverCard.Trigger asChild>{trigger}</RHoverCard.Trigger>
      <RHoverCard.Portal>
        <RHoverCard.Content className={cn(content, className)} sideOffset={5}>
          {children}
          {withArrow && <RHoverCard.Arrow className={arrow} />}
        </RHoverCard.Content>
      </RHoverCard.Portal>
    </RHoverCard.Root>
  );
};

export default HoverCard;
