export const APP_URL = import.meta.env.VITE_APP_URL as string

export const PUBLIC_URL = {
    root: (url = '') => `${url ? url : ""}`,
    home: () => PUBLIC_URL.root('/'),

    auth: (url = '') => PUBLIC_URL.root(`/auth`),
    passwordRecovery: () => PUBLIC_URL.root("/auth/password-recovery"),

    profile: (username = '') => PUBLIC_URL.root(`/profile/${username}`),
    profileEdit: () => PUBLIC_URL.root(`/profile/edit`),

    wishes: (username = '') => PUBLIC_URL.root(`/wishes/${username}`),
    events: (username = '') => PUBLIC_URL.root(`/events/${username}`),
    eventSlug: (username = '', slug = '') => PUBLIC_URL.root(`/events/${username}/${slug}`),

    friends: (username = '') => PUBLIC_URL.root(`/friends/${username}`),
    feed: () => PUBLIC_URL.root('/feed'),

    eventCreate: () => PUBLIC_URL.root('/events/create'),
    wishesCreate: () => PUBLIC_URL.root('/wishes/create')
}