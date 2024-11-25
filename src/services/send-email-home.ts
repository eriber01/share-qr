
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { publicRoutes } from "@/utils/apiUrlBase"
import axios, { AxiosError } from "axios"
import toast from 'react-hot-toast';

interface Prop {
  email: string
}

export const useSendEmailHome = () => {
  return useMutation({
    mutationFn: async ({ email }: Prop) => {

      if (!email.trim().length) {
        throw new Error("The Email is required");
      }

      const { data } = await publicRoutes.post('email-home', { email })
      return data
    },
    onError: () => {
      return toast.error('Error sending the Email')
    },
    onSuccess: () => {
      return toast.success('Email send success')
    }
  })
}
