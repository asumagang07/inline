import React, { FC } from "react";
import { TSpinnerProps } from "./types";
import { StyledSpinner } from "./StyledSpinner";
import cn from "classnames";

const Spinner: FC<TSpinnerProps> = (props) => {
  const {
    size = 32,
    ray_height = 5,
    ray_width = 5,
    ray_radius = 50,
    className,
  } = props;

  const rays: JSX.Element[] = [];

  for (let i = 0; i < 6; i++) {
    rays.push(<div key={i} />);
  }

  return (
    <StyledSpinner
      color={"#2196F3"}
      size={size}
      ray_height={ray_height}
      ray_width={ray_width}
      ray_radius={ray_radius}
      className={cn(className, "animate-spin")}
    >
      {rays}
    </StyledSpinner>
  );
};

export default Spinner;
