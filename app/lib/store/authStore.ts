import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { IUser } from '~/entities/user/user.types'


// interface AuthStore {
//     user: IUser | null,
//     isAuthorized: boolean,
//     setUser: (user: IUser | null) => void,
// }

type AuthStore = {
    user: IUser | null,
    setUser: (user: IUser | null) => void,
}

export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            // bears: 0,
            user: null,
            setUser: (user) => set({ user }),
        }),
        {
            name: 'user-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage)
        },
    ),
)

