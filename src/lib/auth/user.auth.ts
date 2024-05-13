import axios, {AxiosResponse} from "axios";
import {setCookie} from "@/lib/helpers/cookies";
import {API_URL} from "@/lib/helpers/config.env";

export async function userLogin(input: {email: string, password: string}): Promise<{data: {token: string, message: string}, code: number}> {
    // Verification

    // Send request
    const res: AxiosResponse<{data: {token: string, message: string}, code: number}, {code: number, message: string}> = await axios.post(API_URL + '/users/login', input)
    if (res.data && res.data.data && res.data.data.token) {
        setCookie('auth-token', res.data.data.token, 1)
    }
    return res.data
}