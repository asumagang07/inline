/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from "react";
import { TButtonGroupProps } from "./types";
import { Button } from "..";

const ButtonGroup: FC<TButtonGroupProps> = (props) => {
  const { id, items } = props;

  return (
    <div id={id} className="inline-flex rounded-md shadow-sm">
      {items?.map((item) => (
        <Button key={item?.id} id={item?.id} label={item?.label} />
      ))}
      {/* <a
        href="#"
        aria-current="page"
        className="px-4 py-2 text-sm font-medium text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Profile
      </a>
      <a
        href="#"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Settings
      </a>
      <a
        href="#"
        className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
      >
        Messages
      </a> */}
    </div>
  );
};

export default ButtonGroup;
