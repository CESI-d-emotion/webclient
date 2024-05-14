'use client'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/index'
import { checkAndSetAuthFromCookie } from '@/lib/helpers/cookies'
import { setToken } from '@/store/tokenSlice'
import { getUserInfo } from '@/lib/user/user.service'

export default function StoreProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    checkIfUserAuthHandler()
  }, [])

  const checkIfUserAuthHandler = async () => {
    const token = checkAndSetAuthFromCookie()
    if (token) {
      const user = await getUserInfo(token.token as string)
      if (!user) return
      store.dispatch(setToken({...token, role: user.userRoleId as number}))
    }
  }
  return <Provider store={store}>{children}</Provider>
}
