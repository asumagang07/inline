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
  const {
    className,
    title,
    items,
    allowZeroExpanded = true,
    preExpanded,
  } = props;

  return (
    <StyledAccordion
      className={cn(
        "flex flex-col gap-3 min-h-[200px] w-full text-default-900"
      )}
    >
      {title && <p>{title}</p>}
      <Accordion
        allowZeroExpanded={allowZeroExpanded}
        preExpanded={preExpanded}
        className="border rounded-t-xl !border-b-0"
        onChange={() => console.log("Hello world")}
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
                    <AccordionItemButton className="w-full flex gap-2 items-center justify-between font-medium ">
                      {item.heading}
                      <BiSolidChevronDown />
                    </AccordionItemButton>
                  </AccordionItemHeading>
                ) : (
                  <AccordionItemHeading
                    className={cn(
                      "AccordionItemHeading px-3 h-12 border-b  flex items-center hover:bg-default-50"
                    )}
                  >
                    <AccordionItemButton className="w-full flex gap-2 items-center justify-between font-medium">
                      {item.heading}
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
      </Accordion>
    </StyledAccordion>
  );
};

export default AccordionComponent;

const StyledAccordion = styled.div`
  > div {
    > .AccordionItem:first-of-type {
      > .AccordionItemHeading {
        border-top-left-radius: 0.75rem;
        border-top-right-radius: 0.75rem;
      }
    }
  }
`;
