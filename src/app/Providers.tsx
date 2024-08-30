'use client'
import { Toaster } from "react-hot-toast";
import { PropsWithChildren } from "react"
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

export const Providers = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
  }

  return <Provider store={storeRef.current}>
    <Toaster
      containerStyle={{ zIndex: 10000 }}
    />
    {children}
  </Provider>
}