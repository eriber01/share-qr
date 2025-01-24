'use client'
import { Toaster } from "react-hot-toast";
import { PropsWithChildren } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Providers = ({ children }: PropsWithChildren) => {

  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>
    <Toaster
      containerStyle={{ zIndex: 10000 }}
    />
    {children}
  </QueryClientProvider>
}