import axios from 'axios'
import { API_URL } from '@/lib/helpers/config.env'
import { ApiResponse, Region } from '@/lib/entities/utils.entity'

export async function fetchRegion() {
  const res = await axios.get<ApiResponse<Region[]>>(API_URL + '/utils/region')
  return res.data
}
