import { removeFromStorage, saveTokenStorage } from "./auth.token";
import { api } from "~/shared/api/api.interceptor";
import { API_URL } from "~/shared/config/api.config";
import type { IAuth, IAuthResponse } from "./auth.types";

class AuthService {
    async main(type: 'login' | 'register', data: IAuth) {
        const response = await api({
            url: API_URL.auth(`/${type}`),
            method: 'POST',
            data
        })

        if (type == 'login' || response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }

    async sendVerification(email: string) {
        const response = await api({
            url: API_URL.sendToken(),
            method: "POST",
            data: {
                "email": email
            }
        })

        return response
    }

    async verify(token: string) {
        const response = await api<IAuthResponse>({
            url: API_URL.verify(),
            method: "POST",
            data: { "token": token }
        })
        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }

    async resetPassword(email: string) {
        const response = await api({
            url: API_URL.resetPassword(),
            method: "POST",
            data: {
                "email": email
            }
        })

        return response
    }

    async newPassword(token: string, password: string) {
        const response = await api({
            url: API_URL.newPassword(token),
            method: "POST",
            data: {
                "password": password
            }
        })

        return response
    }

    async refresh() {
        const response = await api<IAuthResponse>({
            url: API_URL.auth('/refresh'),
            method: 'POST'
        })

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }

    async logout() {
        removeFromStorage()
        // const response = await api<boolean>({
        //     url: API_URL.auth('/logout'),
        //     method: 'POST'
        // })

        // if (response.data) removeFromStorage()

        // return response

    }

}

export const authService = new AuthService() 