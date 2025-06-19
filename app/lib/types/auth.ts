import type { IUser } from "./user"

export interface IAuthRegister {
    name: string,
    email: string,
    password: string
}

export interface IAuthLogin {
    email: string,
    password: string
}

export interface IAuthResponse {
    user: IUser,
    accessToken: string
}