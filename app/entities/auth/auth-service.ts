import { api } from "~/lib/api/interceptor";
import { API_URL } from "~/lib/config/api.config";
import type { IAuthResponse,  IAuthLogin, IAuthRegister } from "~/lib/types/auth";
import { removeFromStorage, saveTokenStorage } from "./auth-token";

class AuthService {
    // async main(type: 'login' | 'register', data: IAuthForm | IAuthLogin) {
    //     const response = await api<IAuthResponse>({
    //         url: API_URL.auth(`/${type}`),
    //         method: 'POST',
    //         data
    //     })

    //     if (response.data.accessToken)
    //         saveTokenStorage(response.data.accessToken)

    //     return response
    // }

    async register(data: IAuthRegister) {
        const response = await api<IAuthResponse>({
            url: API_URL.auth('/register'),
            method: 'POST',
            data
        })

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }

    async login(data: IAuthLogin) {
        const response = await api<IAuthResponse>({
            url: API_URL.auth('/login'),
            method: 'POST',
            data
        })

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }




    async getNewTokens() {
        const response = await api<IAuthResponse>({
            url: API_URL.auth('/login/access-token'),
            method: 'POST'
        })

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

        return response
    }

    async logout() {
        removeFromStorage()
    }

}

export const authService = new AuthService() 