import { privateRoutes } from "@/utils/apiUrlBase";
import toast from "react-hot-toast";
import { z } from "zod";
import { User } from "@prisma/client";

export const schema = z.object({
  emailSend: z.string({ message: 'Email send to is required' }).min(1, { message: 'Email send to is required' }).email({ message: "Invalid email address" }),
  oneView: z.boolean(),
  isDue: z.boolean(),
  endDate: z.date().optional(),
  message: z.string({ message: 'Message is required' }).trim().min(1, { message: 'Message is required' }),
  needCode: z.boolean(),
  codeAccess: z.string().trim().optional(),
}).superRefine(({ needCode, codeAccess, isDue, endDate }, ctx) => {
  if (needCode && codeAccess?.length! < 4) {
    ctx.addIssue({
      path: ["codeAccess"],
      code: z.ZodIssueCode.custom,
      message: "Is very short",
    });
  }

  if (isDue && !endDate) {
    ctx.addIssue({
      path: ["endDate"],
      code: z.ZodIssueCode.custom,
      message: "Is required"
    })
  }
});

export type CreateQrI = z.infer<typeof schema>

export const toSendQr = async (data: CreateQrI, user: User) => {
  try {
    const sendQr = async () => {
      const { data: share } = await privateRoutes.put('qr-code', { data, user })
      console.log({ share });
    }

    console.log({ data, user });
    await toast.promise(
      sendQr(),
      {
        loading: 'Sending Qr...',
        success: () => {

          return 'Qr send successfully'
        },
        error: 'Error to send Qr',
      }
    );
  } catch (error) {
    console.log(error);
  }
}