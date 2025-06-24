import { api, apiWithAuth } from "~/lib/api/interceptor";
import { API_URL } from "~/lib/config/api.config";
import type { IUser } from "~/entities/user/user.types";

class UserService {
    async getProfile() {
        const { data } = await apiWithAuth<IUser>({
            url: API_URL.auth('/@me'),
            method: 'GET'
        })

        return data
    }

    async getUser(userId: string) {
        const { data } = await api<IUser>({
            url: API_URL.user(`/by-id/${userId}`),
            method: 'GET'
        })
        return data
    }

}

export const userService = new UserService()