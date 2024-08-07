import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { globalState } from './types';


const initialState: globalState = {
  isOpenShareQrModal: false
}

export const globalStateSlice = createSlice({
  name: 'globalState',
  initialState,
  reducers: {
    toggleShareQrModal: (state, { payload }: PayloadAction<boolean>) => {
      state.isOpenShareQrModal = payload
    }
  }
})

export const { toggleShareQrModal } = globalStateSlice.actions

export default globalStateSlice.reducer