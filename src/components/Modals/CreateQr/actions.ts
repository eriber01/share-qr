import { z } from "zod";

export const schema = z.object({
  emailSend: z.string({ message: 'Email send to is required' }).min(1, { message: 'Email send to is required' }).email({ message: "Invalid email address" }),
  isOneView: z.boolean(),
  message: z.string({ message: 'Message is required' }).trim().min(1, { message: 'Message is required' })
})

export type CreateQrI = z.infer<typeof schema>

export const toSendQr = async (state: CreateQrI) => {
  try {
    const validate = schema.safeParse(schema)
  } catch (error) {
    console.log(error);
  }
}