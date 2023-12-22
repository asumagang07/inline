/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import { List } from "../../components";

const meta: Meta<typeof List> = {
  component: List,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/List",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: (args: any) => (
    <>
      <List {...args}>
        <List.Item>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </List.Item>
        <List.Item>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </List.Item>
        <List.Item>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </List.Item>
      </List>
    </>
  ),
  args: {
    variant: "default",
  },
};

export const Decimal: Story = {
  render: (args: any) => (
    <>
      <List {...args}>
        <List.Item>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </List.Item>
        <List.Item>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </List.Item>
        <List.Item>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </List.Item>
      </List>
    </>
  ),
  args: {
    ...Default,
    variant: "decimal",
  },
};
