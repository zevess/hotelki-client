export interface IUser {
    id?: string,
    name: string,
    email: string,
    avatar: string,
    password: string
}

export interface IUserUpdate{
    name?: string,
    email?: string,
    avatar?: string
}