import React, { FC } from "react";
import { TTableProps } from "./types";

const Table: FC<TTableProps> = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full table-auto text-sm text-left ">
        <thead className="text-xs text-white uppercase bg-blue-500">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b hover:bg-blue-50">
            <td className="px-6 py-3">Apple MacBook Pro 17</td>

            <td className="px-6 py-3">Silver</td>
            <td className="px-6 py-3">Laptop</td>
            <td className="px-6 py-3">$2999</td>
          </tr>
          <tr className="bg-white border-b hover:bg-blue-50">
            <td className="px-6 py-3">Microsoft Surface Pro</td>
            <td className="px-6 py-3">White</td>

            <td className="px-6 py-3">Laptop PC</td>
            <td className="px-6 py-3">$1999</td>
          </tr>
          <tr className="bg-white hover:bg-blue-50">
            <td className="px-6 py-3">Magic Mouse 2</td>

            <td className="px-6 py-3">Black</td>
            <td className="px-6 py-3">Accessories</td>
            <td className="px-6 py-3">$99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
