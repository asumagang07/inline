import React, { FC } from "react";
import { TAlertDialogProps } from "./types";
import * as Dialog from "@radix-ui/react-alert-dialog";

const AlertDialog: FC<TAlertDialogProps> = (props) => {
  const { trigger } = props;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className="DialogOverlay  fixed inset-0"
          style={{ backgroundColor: "rgba(82, 82, 82, 0.2)" }}
        />
        <Dialog.Content className="DialogContent bg-white fixed shadow-lg rounded-md top-1/2  translate-y-1/2 translate-x-1/2 p-4">
          <Dialog.Title className="DialogTitle">
            Are you absolutely sure?
          </Dialog.Title>
          <Dialog.Description className="DialogDescription">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </Dialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <Dialog.Cancel asChild>
              <button className="Button mauve">Cancel</button>
            </Dialog.Cancel>
            <Dialog.Action asChild>
              <button className="Button red">Yes, delete account</button>
            </Dialog.Action>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AlertDialog;
