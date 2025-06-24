import { create } from 'zustand'
import type { IUser } from '~/entities/user/user.types'

interface AuthStore {
    user: IUser | null,
    name: string,
    avatar: string,
    isAuthorized: boolean,
    setUser: (user: IUser | null) => void,
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    isAuthorized: true,
    avatar: 'https://github.com/zevess.png',
    name: "FWQFWQFWQ",
    setUser: (user) => set({ user })

}))