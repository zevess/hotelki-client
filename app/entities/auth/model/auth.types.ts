import type { IUser } from "~/entities/user/model/user.types"

export interface IAuth {
    name?: string,
    email: string,
    password: string
}


export interface IAuthResponse {
    user: IUser,
    accessToken: string
}

