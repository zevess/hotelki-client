export const SERVER_URL = import.meta.env.VITE_API_SERVER_URL as string

export const API_URL = {
    root: (url = '') => `${url ? url : ''}`,

    auth: (url = '') => API_URL.root(`/auth${url}`),
    verify: (url = '') => API_URL.auth('/email-confirmation'),
    sendToken: (url = '') => API_URL.root('/auth/email-confirmation/send-token'),
    event: (url = '') => API_URL.root(`/event${url}`),
    wish: (url = '') => API_URL.root(`/wish${url}`),
    user: (url = '') => API_URL.root(`/user${url}`),
    
}