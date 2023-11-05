import React, { FC, useContext } from "react";
import { TStepperProps } from "./types";
import styled from "styled-components";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { StyledStep } from "./StyledStep";

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
        <StyledStep
          key={index}
          $status={step.status}
          $color={color}
          className="relative flex gap-8"
        >
          <div
            className={cn(
              statusCls.base,
              statusCls.status[step.status || "pending"].colors[color]
            )}
          >
            {step.status === "completed" ? (
              <AiOutlineCheck />
            ) : step.status === "error" ? (
              <AiOutlineClose />
            ) : (
              index + 1
            )}
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
