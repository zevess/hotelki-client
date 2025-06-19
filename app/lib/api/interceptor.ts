import type { CreateAxiosDefaults } from "axios";
import { SERVER_URL } from "../config/api.config";
import { errorCatch, getContentType } from "./helper";
import axios from "axios";
import { getAccessToken, removeFromStorage } from "~/entities/auth/auth-token";
import { authService } from "~/entities/auth/auth-service";

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: getContentType(),
    withCredentials: true
}

const api = axios.create(options);
const apiWithAuth = axios.create(options);

apiWithAuth.interceptors.request.use(config => {
    const accessToken = getAccessToken()

    if (config.headers && accessToken)
        config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

apiWithAuth.interceptors.response.use(
    config => config,
    async error => {
        const originalRequest = error.config

        if (
            (error?.response?.status === 401 ||
                errorCatch(error) === 'jwt expired' ||
                errorCatch(error) === 'jwt must be provided') &&
            error.config && !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                await authService.getNewTokens()
                return apiWithAuth.request(originalRequest)
            } catch (error) {
                if(errorCatch(error) === 'jwt expired') removeFromStorage()
            }
        }
    }
)


export { api, apiWithAuth }