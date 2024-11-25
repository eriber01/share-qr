import { configureStore } from '@reduxjs/toolkit'
import globalStateReducer from './features/globalState/globalStateSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      globalState: globalStateReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']