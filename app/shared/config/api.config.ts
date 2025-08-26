export const SERVER_URL = import.meta.env.VITE_API_SERVER_URL as string

export const API_URL = {
    root: (url = '') => `${url ? url : ''}`,

    auth: (url = '') => API_URL.root(`/auth${url}`),
    verify: (url = '') => API_URL.auth(`/email-confirmation${url}`),
    sendToken: () => API_URL.verify('/send-token'),
    resetPassword: () => API_URL.auth('/password-recovery/reset'),
    newPassword: (token = '') => API_URL.auth(`/password-recovery/new/${token}`),

    event: (url = '') => API_URL.root(`/event${url}`),
    getEventById: (eventId = '') => API_URL.event(`/by-id/${eventId}`),
    getEventByUser: (userId = '') => API_URL.event(`/by-user/${userId}`),
    getEventByUserAndSlug: (userId = '', slug = '') => API_URL.event(`/by-user/${userId}/${slug}`),
    createEvent: () => API_URL.event(`/create`),
    updateEvent: (eventId = '') => API_URL.event(`/update/${eventId}`),
    deleteEvent: (eventId = '') => API_URL.event(`/delete/${eventId}`),


    wish: (url = '') => API_URL.root(`/wish${url}`),
    getWishById: (wishId = '') => API_URL.wish(`/by-id/${wishId}`),
    getWishByEvent: (eventId = '') => API_URL.wish(`/by-event/${eventId}`),
    getWishByUser: (userId = '') => API_URL.wish(`/by-user/${userId}`),
    getWishByUserAndSlug: (userId = '', slug = '') => API_URL.wish(`/by-user/${userId}/${slug}`),
    createWish: () => API_URL.wish(`/create`),
    updateWish: (wishId = '') => API_URL.wish(`/update/${wishId}`),
    deleteWish: (wishId = '') => API_URL.wish(`/delete/${wishId}`),


    user: (url = '') => API_URL.root(`/user${url}`),
    updateUser: () => API_URL.user('/update'),
    getUserById: (userId = '') => API_URL.user(`/by-id/${userId}`),
    getUserByUsername: (username = '') => API_URL.user(`/by-username/${username}`),
    findUser: (slug = '') => API_URL.user(`/find/${slug}`),

    friend: (url = '') => API_URL.root(`/friends${url}`),
    sendFriendRequest: (receiverId = '') => API_URL.friend(`/send-request/${receiverId}`),
    acceptFriendRequest: (requestId = '') => API_URL.friend(`/accept-request/${requestId}`),
    declineFriendRequest: (requestId = '') => API_URL.friend(`/decline-request/${requestId}`),
    getIncomingFriendRequests: (userId = '') => API_URL.friend(`/get-incoming/${userId}`),
    getOutgoingFriendRequests: (userId = '') => API_URL.friend(`/get-outgoing/${userId}`),
    getFriends: (userId = '') => API_URL.friend(`/get-friends/${userId}`),
    getFriendsEvents: (userId = '') => API_URL.friend(`/get-friends-events/${userId}`),
    deleteFriend: (friendId = '') => API_URL.friend(`/delete-friend/${friendId}`)
}