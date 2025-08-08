import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { IUser } from '~/entities/user/user.types'

type AuthStore = {
    user: IUser | null,
    setUser: (user: IUser | null) => void,
    currentUser: IUser | null,
    setCurrentUser: (user: IUser | null) => void,
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            user: null,
            currentUser: null,
            setUser: (user) => set({ user }),
            setCurrentUser: (currentUser) => set({ currentUser })
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage)
        },
    ),
)

