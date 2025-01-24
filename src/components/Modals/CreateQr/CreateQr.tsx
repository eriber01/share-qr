'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Checkbox,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography
} from "@material-tailwind/react"
import { Button } from "../../ui/button";
import { CreateQrI, schema, toSendQr } from "./actions";
import { CustomInput } from "@/components/ui/CustomInput";
import { CustomTextArea } from "@/components/ui/CustomTextArea";
import Flatpickr from 'react-flatpickr';
import { useUserStore } from "@/hooks/stores/useUserStore";
import { useGlobalStore } from "@/hooks/stores/useGlobalStore";
import { User } from "@prisma/client";
import { useEffect } from "react";

interface Props {
  user: User | null
}

export const CreateQr = ({ user }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors },
    setValue
  } = useForm<CreateQrI>({ resolver: zodResolver(schema) })

  const { setUser } = useUserStore()
  const { toggleShareQrModal, isOpenShareQrModal } = useGlobalStore()

  const handleOpen = () => {
    reset()
    toggleShareQrModal()
  };

  const handledSubmit = async (data: CreateQrI) => {
    if (user) {
      await toSendQr(data, user)
      handleOpen()
    }
  }

  useEffect(() => {
    if (user) {
      setUser(user)
    }
  }, [setUser, user])

  console.log(watch('endDate'));


  return (
    <div>
      <Dialog
        open={isOpenShareQrModal}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        dismiss={{
          enabled: false,
        }}
      >
        <DialogHeader>
          <div>
            Share a Qr.
            <Typography>Share text or link width a friend</Typography>
          </div>
        </DialogHeader>
        <div>
          <form onSubmit={handleSubmit(handledSubmit)}>
            <DialogBody>
              <div className="flex w-full flex-wrap items-center justify-between">
                <div className="w-[100%] md:w-[50%]">
                  <CustomInput
                    error={errors?.emailSend?.message}
                    register={register}
                    label="Send to..."
                    name="emailSend"
                    watch={watch}
                  />
                </div>
                <div>
                  <Checkbox
                    crossOrigin={''}
                    className="rounded-xl bg-transparent p-0 m-0"
                    color="blue"
                    id="oneView"
                    label="One view"
                    {...register('oneView')}
                  />

                  <Checkbox
                    crossOrigin={''}
                    className="rounded-xl bg-transparent p-0 m-0"
                    color="blue"
                    id="isDue"
                    label="Is due"
                    {...register('isDue')}
                    style={{ padding: 0 }}
                  />

                  <Checkbox
                    crossOrigin={''}
                    className="rounded-xl bg-transparent p-0 m-0"
                    color="blue"
                    id="needCode"
                    label="Need code"
                    {...register('needCode')}
                    style={{ padding: 0 }}
                  />
                </div>
              </div>
              <div className="my-2 flex flex-wrap">
                {
                  watch('isDue') && <div className="flex flex-col w-[40%] md:w-[20%] mr-2 mb-2">
                    <Flatpickr
                      {...register('endDate')}
                      name="endDate"
                      onChange={(selected) => setValue('endDate', selected[0])}
                      options={{
                        dateFormat: 'Y-m-d',
                        minDate: 'today',
                        disableMobile: true,
                        
                      }}
                      placeholder="Select a date"
                      className={`
                        border p-2 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-center
                        ${errors.endDate ? 'border-red-500' : 'border-gray-300'}
                        `}
                    />
                    {errors.endDate && <Typography color="red">{errors.endDate?.message}</Typography>}
                  </div>
                }
                {
                  watch('needCode') &&
                  <div className="w-[40%] md:w-[28%]">
                    <CustomInput
                      error={errors?.codeAccess?.message}
                      register={register}
                      label="Access code"
                      name="codeAccess"
                      watch={watch}
                    />
                  </div>
                }
              </div>
              <CustomTextArea
                resize={false}
                label="Message"
                name="message"
                error={errors.message?.message}
                register={register}
                watch={watch}
              />
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
              <Button type="submit" variant="purple" color="green" /* onClick={onSubmit} */>
                <span>Share</span>
              </Button>
            </DialogFooter>
          </form>
        </div>
      </Dialog>
    </div>
  )
}
