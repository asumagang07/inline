import React, { FC } from "react";
import { TImageProps } from "./types";
import { Img } from "react-image";

const Image: FC<TImageProps> = (props) => {
  const { id = "image", className, srcList } = props;

  return (
    <div className={className}>
      <Img src={srcList} id={id} loader={<p>Loading...</p>} />
    </div>
  );
};

export default Image;
