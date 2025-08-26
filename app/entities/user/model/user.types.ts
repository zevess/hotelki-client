export interface IUser {
    id: string,
    name: string,
    username: string,
    email: string,
    avatar: string,
    password: string,
    role: string,
    isVerified: boolean
}

export interface IUserUpdate{
    name?: string,
    email?: string,
    avatar?: string,
    username?: string
}

export interface IUserFind{
    slug: string
}