'use client'
import { FormEvent, useRef, useState } from "react";

import {
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Textarea,
  Typography
} from "@material-tailwind/react"
import { Button } from "../../ui/button";
import { CreateQrI } from "@/types";
import { INITIAL_STATE } from "./actions";
import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { toggleShareQrModal } from "@/lib/features/globalState/globalStateSlice";

export const CreateQr = () => {
  const { isOpenShareQrModal } = useAppSelector(state => state.globalState)
  const [state, setState] = useState<CreateQrI>(INITIAL_STATE)
  const dispatch = useAppDispatch()

  const formRef = useRef<HTMLFormElement>(null)

  const handleOpen = () => dispatch(toggleShareQrModal(!isOpenShareQrModal));

  const onChange = (path: keyof CreateQrI, value: string | boolean) => {
    setState(prev => ({
      ...prev,
      [path]: value
    }))
  }

  console.log(state);

  const handledSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  }

  const onClick = () => {
    if (formRef.current) {
      formRef.current.requestSubmit()
    }
  }

  return (
    <div>
      <Dialog
        open={isOpenShareQrModal}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          <div>
            Share a Qr.
            <Typography>Share text or link width a friend</Typography>
          </div>
        </DialogHeader>
        <DialogBody>
          <div>
            <form ref={formRef} onSubmit={handledSubmit}>
              <div className="flex w-full flex-wrap items-center justify-between">
                <div className="w-[70%]">
                  <Input
                    crossOrigin={''}
                    label="Send to..."
                    type="email"
                    id="email"
                    error={false}
                    success={true}
                    value={state.emailSend}
                    onChange={({ target: { value } }) => onChange('emailSend', value)}
                  />
                </div>

                <Checkbox
                  crossOrigin={''}
                  className="rounded-xl bg-transparent p-0 m-0"
                  color="blue"
                  label="Only one view"
                  checked={state.isOneView}
                  onChange={({ target: { checked } }) => onChange('isOneView', checked)}
                />

              </div>
              <div className="mb-4" />
              <Textarea
                label="Message"
                resize
                error={false}
                success={true}
                value={state.message}
                onChange={({ target: { value } }) => onChange('message', value)}
              />

            </form>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="destructive"
            color="red"
            onClick={handleOpen}
            className="mr-3"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="purple" color="green" onClick={onClick}>
            <span>Share</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
