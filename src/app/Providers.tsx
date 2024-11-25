'use client'
import { Toaster } from "react-hot-toast";
import { PropsWithChildren, useEffect } from "react"
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useClerk } from "@clerk/nextjs";
import { privateRoutes } from "@/utils/apiUrlBase";

export const Providers = ({ children }: PropsWithChildren) => {
  const { addListener } = useClerk();
  const previousSessionId = useRef<string | null | undefined>(null);

  const storeRef = useRef<AppStore>()
  const queryClient = new QueryClient();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  useEffect(() => {
    const listener = addListener(async event => {
      if (event.session?.id !== previousSessionId.current) {
        previousSessionId.current = event.session?.id;
        if (event.session) {
          await privateRoutes.put('users/save-user')
        } else {
          console.log('Sesión terminada.');
        }
      }
    })
    return () => listener()
  }, [addListener])


  return <Provider store={storeRef.current}>
    <QueryClientProvider client={queryClient}>
      <Toaster
        containerStyle={{ zIndex: 10000 }}
      />
      {children}
    </QueryClientProvider>
  </Provider>
}