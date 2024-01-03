import React, { FC } from "react";
import { ISidebarProps } from "./types";
//@ts-ignore
import logoimg from "../../../public/secondary-logo_3x.png";
import { Button, Image } from "../../components";
import { FaChevronLeft } from "react-icons/fa";

const Sidebar: FC<ISidebarProps> = (props) => {
  const { children, logo = logoimg } = props;
  return (
    <div className="fixed left-0 top-0 w-60 min-h-screen bg-white shadow-md p-3 flex flex-col justify-start items-start">
      <div className="w-full relative">
        <div className="">
          <Image
            id={""}
            size="auto"
            className="!h-16"
            src={
              "https://tritonsubs.com/wp-content/uploads/2020/07/Placeholder-16x9-1.jpg"
            }
          />
        </div>
        <div className="absolute top-0 -right-4">
          <Button noBaseStyle icon={<FaChevronLeft />} />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
