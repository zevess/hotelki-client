import { api, apiWithAuth } from "~/lib/api/api.interceptor";
import { type IWish, type IWishResponse } from "./wish.types";
import { API_URL } from "~/lib/config/api.config";

class WishService {
    async getById(wishId: string) {
        const { data } = await api<IWishResponse>({
            url: API_URL.wish(`/by-id/${wishId}`),
            method: 'GET'
        })
        return data
    }

    async getByEvent(eventId: string) {
        const { data } = await api<IWishResponse[]>({
            url: API_URL.wish(`/by-event/${eventId}`),
            method: 'GET'
        })
        return data
    }

    async getByUser(userId: string | undefined) {
        const { data } = await api<IWishResponse[]>({
            url: API_URL.wish(`/by-user/${userId}`),
            method: 'GET'
        })
        return data
    }

    async getByUserAndSlug(userId: string | undefined, slug?: string | undefined) {
        const { data } = await api<IWishResponse>({
            url: API_URL.wish(`/by-user/${userId}/${slug}`),
            method: 'GET'
        })
        return data
    }

    async create(data: IWish) {
        const response = await apiWithAuth<IWishResponse>({
            url: API_URL.wish('/create'),
            method: 'POST',
            data
        })

        return response
    }

    async update(data: IWish, wishId: string) {
        const response = await apiWithAuth<IWishResponse>({
            url: API_URL.wish(`/update/${wishId}`),
            method: 'PATCH',
            data
        })

        return response
    }

    async delete(wishId: string) {
        const response = await apiWithAuth<IWishResponse>({
            url: API_URL.wish(`/delete/${wishId}`),
            method: 'DELETE',
        })

        return response
    }

}

export const wishService = new WishService()