/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from "@storybook/react";
import Table from "../../components/Table";
import { data } from "./data";

const meta: Meta<typeof Table> = {
  component: Table,
  //👇 Enables auto-generated documentation for the component story
  tags: ["autodocs"],
  title: "Components/Table",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args: any) => (
    <div className="">
      <Table>
        <Table.Header>
          <Table.Row className="!bg-transparent">
            <Table.Cell cellType="th">FirstName</Table.Cell>
            <Table.Cell cellType="th">LastName</Table.Cell>
            <Table.Cell cellType="th">Weight</Table.Cell>
            <Table.Cell cellType="th">Height</Table.Cell>
            <Table.Cell cellType="th">City</Table.Cell>
            <Table.Cell cellType="th">Membership Plan</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((i) => (
            <Table.Row key={i.first_name} className="hover:bg-primary-50">
              <Table.Cell>{i.first_name}</Table.Cell>
              <Table.Cell>{i.last_name}</Table.Cell>
              <Table.Cell>{i.weight}</Table.Cell>
              <Table.Cell>{i.height}</Table.Cell>
              <Table.Cell>{i.city}</Table.Cell>
              <Table.Cell>{i.membership}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  ),
  args: {},
};
