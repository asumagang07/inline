import React, { useContext } from "react";
import { ISwitchLabelProps, ISwitchProps, ISwitchRootProps } from "./types";
import * as RSwitch from "@radix-ui/react-switch";
import cn from "classnames";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";

/**
 * Label
 * ------------------------------------------------------------
 */
const Switch = React.forwardRef<HTMLDivElement, ISwitchProps & {}>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center justify-center", className)}
      >
        {children}
      </div>
    );
  }
);

/**
 * Root
 * ------------------------------------------------------------
 */
const SwitchRoot = React.forwardRef<
  React.ElementRef<typeof RSwitch.Root>,
  ISwitchRootProps & {
    inset?: boolean;
  }
>(({ className, color = "purple", disabled, ...props }, ref) => {
  const {
    styles: {
      switchStyles: { rootCls },
    },
  } = useContext(ThemeContext);

  return (
    <RSwitch.Root
      ref={ref}
      className={cn(rootCls.base, rootCls.colors[color])}
      id="switch"
      {...props}
    />
  );
});
Switch.displayName = RSwitch.Root.displayName;
// ------------------------------------------------------------

/**
 * Label
 * ------------------------------------------------------------
 */
const SwitchLabel = React.forwardRef<HTMLLabelElement, ISwitchLabelProps & {}>(
  ({ className, label }, ref) => {
    if (!label) return null;
    return (
      <label
        ref={ref}
        className={cn("leading-none pr-2", className)}
        htmlFor="airplane-mode"
      >
        {label}
      </label>
    );
  }
);
// ------------------------------------------------------------

/**
 * Thumb
 * ------------------------------------------------------------
 */
const SwitchThumb = React.forwardRef<
  React.ElementRef<typeof RSwitch.Thumb>,
  React.ComponentPropsWithoutRef<typeof RSwitch.Thumb> & {
    inset?: boolean;
  }
>(({ className, ...props }, ref) => {
  return (
    <RSwitch.Thumb
      ref={ref}
      className={cn(
        "block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
      )}
      {...props}
    />
  );
});
Switch.displayName = RSwitch.Thumb.displayName;
// ------------------------------------------------------------

export default Object.assign(Switch, {
  Root: SwitchRoot,
  Label: SwitchLabel,
  Thumb: SwitchThumb,
});
