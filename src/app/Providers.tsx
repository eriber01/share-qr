'use client'
import { Toaster } from "react-hot-toast";
import { PropsWithChildren } from "react"
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


export const Providers = ({ children }: PropsWithChildren) => {

  const storeRef = useRef<AppStore>()
  const queryClient = new QueryClient();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }



  return <Provider store={storeRef.current}>
    <QueryClientProvider client={queryClient}>
      <Toaster
        containerStyle={{ zIndex: 10000 }}
      />
      {children}
    </QueryClientProvider>
  </Provider>
}