import { api, apiWithAuth } from "~/lib/api/api.interceptor";
import { API_URL } from "~/lib/config/api.config";
import type { IUser, IUserUpdate } from "~/entities/user/user.types";
import axios from "axios";
import { type IImgbbResponse } from "~/lib/types/imgbb.types";

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

    async updateUser(data: IUserUpdate) {
        const response = await apiWithAuth<IUser>({
            url: API_URL.user('/update'),
            method: "PATCH",
            data
        })

        return response
    }

}

export const userService = new UserService()