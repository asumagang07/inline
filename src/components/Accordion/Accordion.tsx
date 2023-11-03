import React, { FC } from "react";
import { TAccordionProps } from "./types";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import cn from "classnames";
import { BiSolidChevronDown, BiSolidChevronRight } from "react-icons/bi";
import styled from "styled-components";

const AccordionComponent: FC<TAccordionProps> = (props) => {
  const { className, items, allowZeroExpanded = true, preExpanded } = props;

  return (
    <StyledAccordion
      allowZeroExpanded={allowZeroExpanded}
      preExpanded={preExpanded}
      className={cn("border rounded-t-xl !border-b-0", className)}
    >
      {items?.map((item) => (
        <AccordionItem
          uuid={item.id}
          key={item.id}
          className="AccordionItem first-of-type:rounded-t-xl"
        >
          <AccordionItemState>
            {({ expanded }) => {
              return expanded ? (
                <AccordionItemHeading
                  className={cn(
                    "AccordionItemHeading px-3 h-12 flex items-center justify-between border-b  bg-blue-50  "
                  )}
                >
                  <AccordionItemButton className="w-full h-full flex gap-2 items-center justify-between font-medium ">
                    <div className="flex items-center gap-2">
                      {item?.itemIcon}
                      {item.heading}
                    </div>
                    <BiSolidChevronDown />
                  </AccordionItemButton>
                </AccordionItemHeading>
              ) : (
                <AccordionItemHeading
                  className={cn(
                    "AccordionItemHeading px-3 h-12 border-b  flex items-center hover:bg-default-50"
                  )}
                >
                  <AccordionItemButton className="w-full h-full flex gap-2 items-center justify-between font-medium">
                    <div className="flex items-center gap-2">
                      {item?.itemIcon}
                      {item.heading}
                    </div>
                    <BiSolidChevronRight />
                  </AccordionItemButton>
                </AccordionItemHeading>
              );
            }}
          </AccordionItemState>
          <AccordionItemPanel
            onClick={item.onClick}
            className="py-2 px-4 border-b"
          >
            {item.content}
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </StyledAccordion>
  );
};

export default AccordionComponent;

const StyledAccordion = styled(Accordion)`
  > .AccordionItem:first-of-type {
    > .AccordionItemHeading {
      border-top-left-radius: 0.75rem;
      border-top-right-radius: 0.75rem;
    }
  }
`;
