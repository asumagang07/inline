import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "../../components";
import { AccordionData, AccordionWithIconData } from "./data";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  argTypes: {
    // id: {
    //   defaultValue: "Accordion",
    //   type: "string",
    // },
    // size: {
    //   defaultValue: "default",
    //   description: "Changes the variation of the element. ",
    //   options: ["sm", "default", "md", "lg"],
    //   control: { type: "radio" },
    // },
    // borderRadius: {
    //   defaultValue: "full",
    //   description: "Changes the variation of the element. ",
    //   options: ["full", "default", "square"],
    //   control: { type: "radio" },
    // },
    // color: {
    //   defaultValue: "blue",
    //   description:
    //     "Property that changes theme/state of the selection i.e. background and text color",
    //   options: [
    //     "blue",
    //     "red",
    //     "orange",
    //     "yellow",
    //     "purple",
    //     "green",
    //     "default",
    //   ],
    //   control: { type: "select" },
    // },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args: any) => <Accordion {...args} />,
  args: {
    items: AccordionData,
    allowZeroExpanded: true,
  },
};

export const PreExpandedItems: Story = {
  render: (args: any) => <Accordion {...args} />,
  args: {
    items: AccordionData,
    preExpanded: ["1", "3"],
  },
};

export const WithItemIcon: Story = {
  render: (args: any) => <Accordion {...args} />,
  args: {
    items: AccordionWithIconData,
    allowZeroExpanded: true,
  },
};
