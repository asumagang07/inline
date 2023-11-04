import React, { FC, useContext } from "react";
import { TStepperProps } from "./types";
import styled from "styled-components";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { BsCheck } from "react-icons/bs";

const Stepper: FC<TStepperProps> = (props) => {
  const { id = "stepper", className, steps, color = "blue" } = props;

  const {
    styles: {
      stepperStyles: {
        rootCls: { statusCls },
      },
    },
  } = useContext(ThemeContext);

  return (
    <div id={id} className={cn("", className)}>
      {steps?.map((step, index) => (
        <StyledStep key={index} className="relative flex gap-8">
          <div
            className={cn(
              statusCls.base,
              statusCls.status[step.status || "pending"]
            )}
          >
            {step.status === "completed" ? <BsCheck /> : index + 1}
          </div>
          <div className="flex flex-col pt-1">
            <p className="font-medium">{step.label}</p>
            <div className="pt-3 pb-6 text-sm">{step.content}</div>
          </div>
        </StyledStep>
      ))}
    </div>
  );
};

export default Stepper;

const StyledStep = styled.div`
  &:before {
    content: "";
    position: absolute;
    left: 15px;
    top: 0;
    width: 1px;
    background: #9e9e9e;
    height: 100%;
  }
`;
