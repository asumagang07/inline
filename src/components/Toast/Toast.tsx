import React, { FC, useEffect } from "react";
import * as RToast from "@radix-ui/react-toast";
import { IToastProps } from "./types";
import cn from "classnames";

const Toast: FC<IToastProps> = (props) => {
  const { className } = props;

  const [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const oneWeekAway = (date?: any) => {
    const now = new Date();
    const inOneWeek = now.setDate(now.getDate() + 7);
    return new Date(inOneWeek);
  };

  const prettyDate = (date?: any) => {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "full",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <RToast.Provider swipeDirection="right">
      <button
        className="inline-flex items-center justify-center rounded font-medium text-[15px] px-[15px] leading-[35px] h-[35px] bg-white text-violet11 shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button>

      <RToast.Root
        className={cn(
          "bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-Rtoast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut",
          className
        )}
        open={open}
        onOpenChange={setOpen}
      >
        <RToast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
          Scheduled: Catch up
        </RToast.Title>
        <RToast.Description asChild>
          <time
            className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
            dateTime={eventDateRef.current.toISOString()}
          >
            {prettyDate(eventDateRef.current)}
          </time>
        </RToast.Description>
        <RToast.Action
          className="[grid-area:_action]"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Undo
          </button>
        </RToast.Action>
      </RToast.Root>
      <RToast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </RToast.Provider>
  );
};

export default Toast;
