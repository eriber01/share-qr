import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userState } from "./types";


const initialState: userState = {
  user: null
}

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, { payload }: PayloadAction<userState>) => {
      if (payload.user) {
        state.user = payload.user
      }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer