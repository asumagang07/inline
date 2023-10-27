import React, { FC, useContext } from "react";
import { TImageProps } from "./types";
import { Img } from "react-image";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

const Image: FC<TImageProps> = (props) => {
  const {
    id = "image",
    className,
    src,
    size = "default",
    fit = "cover",
    borderRadius = "default",
  } = props;

  const {
    styles: {
      imageStyles: { wrapperCls, imgCls },
    },
  } = useContext(ThemeContext);

  const getSize = () => {
    switch (size) {
      case "sm":
        return 150;
      case "md":
        return 250;
      case "lg":
        return 300;
      case "auto":
        return "100%";
      default:
        return 200;
    }
  };

  return (
    <div
      style={{ width: getSize(), height: getSize() }}
      className={cn(
        wrapperCls.base,
        wrapperCls.borderRadius[borderRadius],
        className
      )}
    >
      <Img
        src={src}
        className={cn(
          "w-full h-full",
          wrapperCls.borderRadius[borderRadius],
          imgCls.fit[fit]
        )}
        id={id}
        loader={
          <div
            className={cn(
              "w-full h-full bg-default-500 animate-pulse",
              wrapperCls.borderRadius[borderRadius]
            )}
          />
        }
        unloader={
          <img
            alt=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGwExbvCAV5wmfTFnfUHr_J72qjaPP4fI3uw&usqp=CAUtWRv1vruz/bD3m3zF/b9FIMyRG2iAAAAAElFTkSuQmCC"
            className={cn(
              "w-full h-full object-cover",
              wrapperCls.borderRadius[borderRadius]
            )}
          />
        }
      />
    </div>
  );
};

export default Image;
