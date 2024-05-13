import {User, UserFromDB} from "@/lib/entities/user.entity";
import axios from "axios";
import {API_URL} from "@/lib/helpers/config.env";

export async function getUserInfo(token: string): Promise<User> {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const whoami = await axios.get<UserFromDB>(API_URL + "/users/whoami", config)
    return {
        id: whoami.data.id,
        firstName: whoami.data.firstName,
        lastName: whoami.data.lastName,
        email: whoami.data.email,
        regionId: whoami.data.regionId,
        userRoleId: whoami.data.userRoleId
    }
}