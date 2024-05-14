import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TokenState {
  token: string | null
  identity: 'isuser' | 'isassociation' | null
}

const initialState: TokenState = {
  token: null,
  identity: null
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{
        token: string
        identity: 'isuser' | 'isassociation'
      }>
    ) {
      state.token = action.payload.token
      state.identity = action.payload.identity
    },
    resetToken(state, action: PayloadAction<typeof initialState>) {
      state = initialState
    }
  }
})

export const { setToken, resetToken } = tokenSlice.actions
export default tokenSlice.reducer
