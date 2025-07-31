export const SERVER_URL = import.meta.env.VITE_API_SERVER_URL as string

export const API_URL = {
    root: (url = '') => `${url ? url : ''}`,

    auth: (url = '') => API_URL.root(`/auth${url}`),
    verify: () => API_URL.auth('/email-confirmation'),
    sendToken: () => API_URL.root('/auth/email-confirmation/send-token'),
    resetPassword: () => API_URL.auth('/password-recovery/reset'),
    newPassword: (token = '') => API_URL.auth(`/password-recovery/new/${token}`),
    event: (eventId = '') => API_URL.root(`/event${eventId}`),
    wish: (wishId = '') => API_URL.root(`/wish${wishId}`),
    user: (userId = '') => API_URL.root(`/user${userId}`),

}