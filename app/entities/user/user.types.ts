export interface IUser {
    id?: string,
    name: string,
    email: string,
    avatar: string,
    password: string,
    role: string,
    isVerified: boolean
}

export interface IUserUpdate{
    name?: string,
    email?: string,
    avatar?: string 
}