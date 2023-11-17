import React, { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import cn from "classnames";
import { TModalProps } from "./types";

const Modal: FC<TModalProps> = (props) => {
  const { trigger, content, title } = props;

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay
            className={cn("DialogOverlay fixed inset-0 ")}
            style={{
              animation:
                "150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running k-eyOShd",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          />
          <Dialog.Content
            className={cn(
              "DialogContent bg-white shadow-2xl h-auto fixed w-[30rem] p-4 border-r"
            )}
            style={{
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              maxHeight: "85vh",
              animation:
                "150ms cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running k-dUePBQ",
            }}
          >
            <Dialog.Title className="DialogTitle pb-4">{title}</Dialog.Title>
            {/* <Dialog.Description className="DialogDescription">
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description> */}
            {content}
            {/* <Dialog.Close asChild>
              <button className="Button green">Save changes</button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                gnfgngn
              </button>
            </Dialog.Close> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default Modal;
