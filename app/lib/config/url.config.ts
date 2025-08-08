export const APP_URL = import.meta.env.VITE_APP_URL as string

export const PUBLIC_URL = {
    root: (url = '') => `${url ? url : ""}`,
    home: () => PUBLIC_URL.root('/'),
    
    auth: (url = '') => PUBLIC_URL.root(`/auth`),
    passwordRecovery: () => PUBLIC_URL.root("/auth/password-recovery"),

    profile: (userId = '') => PUBLIC_URL.root(`/profile/${userId}`),
    profileEdit: () => PUBLIC_URL.root(`/profile/edit`),

    wishes: (userId = '') => PUBLIC_URL.root(`/wishes/${userId}`),
    events: (userId = '') => PUBLIC_URL.root(`/events/${userId}`),
    eventSlug: (userId = '', slug = '') => PUBLIC_URL.root(`/events/${userId}/${slug}`),

    eventCreate: () => PUBLIC_URL.root('/events/create'),
    wishesCreate: () => PUBLIC_URL.root('/wishes/create')
}