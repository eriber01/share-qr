'use client'
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { CreateQrI, schema, toSendQr } from "./actions";
import { useAppDispatch, useAppSelector } from "@/lib/redux-hooks";
import { toggleShareQrModal } from "@/lib/features/globalState/globalStateSlice";
import { CustomInput } from "@/components/ui/CustomInput";
import { CustomTextArea } from "@/components/ui/CustomTextArea";

export const CreateQr = () => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors }
  } = useForm<CreateQrI>({ resolver: zodResolver(schema) })

  const { isOpenShareQrModal } = useAppSelector(state => state.globalState)
  const dispatch = useAppDispatch()

  const formRef = useRef<HTMLFormElement>(null)

  const handleOpen = () => {
    reset()
    dispatch(toggleShareQrModal(!isOpenShareQrModal))
  };

  const handledSubmit = async (data: CreateQrI) => {
    await toSendQr(data)
  }

  const onSubmit = () => {
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
            <form ref={formRef} onSubmit={handleSubmit(handledSubmit)}>
              <div className="flex w-full flex-wrap items-center justify-between">
                <div className="w-[70%]">
                  <CustomInput
                    error={errors?.emailSend?.message}
                    register={register}
                    label="Send to..."
                    name="emailSend"
                    watch={watch}
                  />
                </div>

                <Checkbox
                  crossOrigin={''}
                  className="rounded-xl bg-transparent p-0 m-0"
                  color="blue"
                  id="isOneView"
                  label="Only one view"
                  {...register('isOneView')}
                />

              </div>
              <div className="mb-3" />
              <CustomTextArea
                label="Message"
                name="message"
                error={errors.message?.message}
                register={register}
                watch={watch}
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
          <Button type="submit" variant="purple" color="green" onClick={onSubmit}>
            <span>Share</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}
