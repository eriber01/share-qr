import { Textarea, Typography } from "@material-tailwind/react"
import { watch } from "fs"
import { register } from "module"
import { UseFormRegister, UseFormWatch } from "react-hook-form"

interface Props {
  register: UseFormRegister<any>
  name: string
  label: string
  error: string | undefined
  watch: UseFormWatch<any>
  resize?: boolean
}

export const CustomTextArea = ({ error, label, name, register, watch, resize = true }: Props) => {
  return (
    <>
      <Textarea
        label={label}
        id={name}
        resize={resize}
        {...register(name)}
        error={error ? true : false}
        success={watch(name) && !error ? true : false}
      />
      {error ? <Typography color="red">{error}</Typography> : <Typography color="red" className="opacity-0">{'.'}</Typography>}
    </>
  )
}
