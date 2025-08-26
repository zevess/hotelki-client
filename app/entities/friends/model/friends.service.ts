import { type IUser } from "~/entities/user/model/user.types";
import { apiWithAuth } from "~/shared/api/api.interceptor";
import { API_URL } from "~/shared/config/api.config";
import { type IFriendAcceptRequest, type IFriendDeclineRequest, type IFriendSendRequest, type IIncomingFriendRequests, type IOutgoingFriendRequests } from "./friends.types";
import { type IEventResponse } from "~/entities/event/model/event.types";

class FriendsService {
    async sendFriendRequest(receiverId: string) {
        const response = await apiWithAuth<IFriendSendRequest>({
            url: API_URL.sendFriendRequest(receiverId),
            method: "POST",
        })
        return response
    }

    async acceptFriendRequest(requestId: string) {
        const response = await apiWithAuth<IFriendAcceptRequest>({
            url: API_URL.acceptFriendRequest(requestId),
            method: "PATCH"
        })
        return response
    }

    async declineFriendRequest(requestId: string) {
        const response = await apiWithAuth<IFriendDeclineRequest>({
            url: API_URL.declineFriendRequest(requestId),
            method: "DELETE"
        })
        return response
    }

    async getIncomingFriendRequests(userId: string) {
        const { data } = await apiWithAuth<IIncomingFriendRequests[]>({
            url: API_URL.getIncomingFriendRequests(userId),
            method: "GET"
        })

        return data
    }

    async getOutgoingFriendRequests(userId: string) {
        const { data } = await apiWithAuth<IOutgoingFriendRequests[]>({
            url: API_URL.getOutgoingFriendRequests(userId),
            method: "GET"
        })
        return data
    }

    async getFriends(userId: string) {
        const { data } = await apiWithAuth<IUser[]>({
            url: API_URL.getFriends(userId),
            method: "GET"
        })

        return data
    }


    async getFriendsEvents(userId: string | undefined) {
        const { data } = await apiWithAuth<IEventResponse[]>({
            url: API_URL.getFriendsEvents(userId),
            method: 'GET'
        })
        return data
    }

    async deleteFriend(friendId: string) {
        const response = await apiWithAuth({
            url: API_URL.deleteFriend(friendId),
            method: "DELETE"
        })
        return response
    }

}

export const friendsService = new FriendsService() 