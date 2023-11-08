import React, { FC, useContext, useState } from "react";
import { TStepperProps } from "./types";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { AiOutlineCheck } from "react-icons/ai";
import { StyledStep } from "./StyledStep";

const VerticalStepper: FC<TStepperProps> = (props) => {
  const {
    id = "stepper",
    className,
    steps,
    color = "blue",
    current = 0,
  } = props;

  const {
    styles: {
      stepperStyles: {
        rootCls: { statusCls, colors },
      },
    },
  } = useContext(ThemeContext);

  const [currentStep, setcurrentStep] = useState(current);

  return (
    <div id={id} className={cn("flex flex-col", className)}>
      {steps?.map((step, index) => (
        <StyledStep
          key={index}
          $current={currentStep}
          $index={index}
          $length={steps.length}
          $color={color}
          className={cn("relative flex cursor-pointer  gap-8")}
        >
          <div
            className={cn(
              statusCls.base,
              currentStep === index
                ? colors.current[color]
                : currentStep > index
                ? colors.completed[color]
                : "bg-default-100 text-default-700"
            )}
            onClick={() => setcurrentStep(index)}
          >
            {currentStep > index ? <AiOutlineCheck /> : index + 1}
          </div>
          <div className={cn("flex flex-col pt-1")}>
            <p className="font-medium">{step.label}</p>
            <p className="text-sm text-default-600">{step.description}</p>
            <div className="pt-3 pb-6 text-sm">{step.content}</div>
          </div>
        </StyledStep>
      ))}
    </div>
  );
};

export default VerticalStepper;
