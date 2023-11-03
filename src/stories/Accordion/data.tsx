import { TAccordionItemProps } from "../../components";
import { BiSolidHelpCircle } from "react-icons/bi";

export const AccordionData: TAccordionItemProps[] = [
  {
    id: "1",
    className: "",
    heading: "Get Started",
    content: "content 3",
  },
  {
    id: "2",
    className: "",
    heading: "Components",
    content: "content",
  },
  {
    id: "3",
    className: "",
    heading: "Installation",
    content: "content 2",
  },
];

export const AccordionWithIconData: TAccordionItemProps[] = [
  {
    id: "1",
    className: "",
    heading: "Collapsible Item 1",
    itemIcon: <BiSolidHelpCircle />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "2",
    className: "",
    heading: "Collapsible Item 2",
    itemIcon: <BiSolidHelpCircle />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "3",
    className: "",
    heading: "Collapsible Item 3",
    itemIcon: <BiSolidHelpCircle />,
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
