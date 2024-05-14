import axios, { AxiosResponse } from 'axios'
import { setCookie } from '@/lib/helpers/cookies'
import { API_URL } from '@/lib/helpers/config.env'
import { ApiResponse } from '@/lib/entities/utils.entity'

export async function userLogin(input: {
  email: string
  password: string
}): Promise<{
  data: { token: string; identity: 'isuser' | 'isassociation'; message: string }
  code: number
}> {
  // Verification

  // Send request
  const res: AxiosResponse<
    {
      data: {
        token: string
        identity: 'isuser' | 'isassociation'
        message: string
      }
      code: number
    },
    { code: number; message: string }
  > = await axios.post(API_URL + '/users/login', input)
  if (res.data && res.data.data && res.data.data.token) {
    setCookie('auth-token', res.data.data.token, 1)
    setCookie('auth-identity', res.data.data.identity, 1)
  }
  return res.data
}

interface UserRegisterInput {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
  regionId: string | number
}
interface AuthResponse {
  token: string
  identity: 'isuser' | 'isassociation'
  message: string
}
export async function userRegister(input: UserRegisterInput): Promise<{
  data: { token: string; identity: 'isuser' | 'isassociation'; message: string }
  code: number
}> {
  // Verification
  input.regionId = parseInt(input.regionId as string)

  // Request
  const res = await axios.post<ApiResponse<AuthResponse>>(
    API_URL + '/users/signup',
    input
  )
  if (res.data && res.data.data && res.data.data.token) {
    setCookie('auth-token', res.data.data.token, 1)
    setCookie('auth-identity', res.data.data.identity, 1)
  }
  return res.data
}
