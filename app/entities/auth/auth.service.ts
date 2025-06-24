import { api } from "~/lib/api/interceptor";
import { API_URL } from "~/lib/config/api.config";
import type { IAuth, IAuthResponse } from "~/entities/auth/auth.types";
import { removeFromStorage, saveTokenStorage } from "./auth.token";

class AuthService {
    async main(type: 'login' | 'register', data: IAuth) {
        const response = await api<IAuthResponse>({
            url: API_URL.auth(`/${type}`),
            method: 'POST',
            data
        })

        if (response.data.accessToken)
            saveTokenStorage(response.data.accessToken)

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
        const response = await api<boolean>({
            url: API_URL.auth('/logout'),
            method: 'POST'
        })

        if(response.data) removeFromStorage()

        return response
        
    }

}

export const authService = new AuthService() 