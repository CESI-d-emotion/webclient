import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TokenState {
  token: string | null
  identity: 'isuser' | 'isassociation' | null,
  role: number | null
}

const initialState: TokenState = {
  token: null,
  identity: null,
  role: null
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken(
      state,
      action: PayloadAction<{
        token: string
        identity: 'isuser' | 'isassociation',
        role: number
      }>
    ) {
      state.token = action.payload.token
      state.identity = action.payload.identity
      state.role = action.payload.role
    },
    resetToken(state, action: PayloadAction<typeof initialState>) {
      state = initialState
    }
  }
})

export const { setToken, resetToken } = tokenSlice.actions
export default tokenSlice.reducer
