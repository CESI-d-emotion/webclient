import { User, UserFromDB } from '@/lib/entities/user.entity'
import axios from 'axios'
import { API_URL } from '@/lib/helpers/config.env'
import { ApiResponse } from '@/lib/entities/utils.entity'

export async function getUserInfo(token: string): Promise<User> {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const whoami = await axios.get<ApiResponse<UserFromDB>>(
    API_URL + '/users/whoami',
    config
  )
  return {
    id: whoami.data.data.id,
    firstName: whoami.data.data.firstName,
    lastName: whoami.data.data.lastName,
    email: whoami.data.data.email,
    regionId: whoami.data.data.regionId,
    userRoleId: whoami.data.data.userRoleId
  }
}

export async function updateUser(
  token: string,
  user: { firstName: string; lastName: string; email: string }
) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post<ApiResponse<string>>(
    API_URL + '/users/update',
    user,
    config
  )
  if (response.data.code == 200) {
    return response.data
  }
}
