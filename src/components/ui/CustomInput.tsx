'use client'

import { Input, Typography } from "@material-tailwind/react"
import { UseFormRegister, UseFormWatch } from "react-hook-form"

interface Props {
  register: UseFormRegister<any>
  name: string
  label: string
  error: string | undefined
  watch: UseFormWatch<any>
}

export const CustomInput = ({ error, name, label, register, watch }: Props) => {
  return (
    <>
      <Input
        crossOrigin={''}
        label={label}
        id={name}
        {...register(name)}
        error={error ? true : false}
        success={watch(name) && !error ? true : false}
      />
      {error ? <Typography color="red">{error}</Typography> : <Typography color="red" className="opacity-0">{'.'}</Typography>}
    </>
  )
}
