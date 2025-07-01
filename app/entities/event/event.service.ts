import { api, apiWithAuth } from "~/lib/api/interceptor";
import { API_URL } from "~/lib/config/api.config";
import type { IEvent, IEventResponse } from "./event.types";

class EventService {
    async getById(eventId: string) {
        const { data } = await api<IEvent>({
            url: API_URL.event(`/by-id/${eventId}`),
            method: 'GET'
        })
        return data
    }

    async getByUser(userId: string | undefined) {
        const { data } = await api<IEventResponse[]>({
            url: API_URL.event(`/by-user/${userId}`),
            method: 'GET'
        })
        return data
    }

    async create(data: IEvent) {
        const response = await apiWithAuth<IEventResponse>({
            url: API_URL.event('/create'),
            method: 'POST',
            data
        })

        return response
    }

    async update(eventId: string, data: IEvent) {
        const response = await apiWithAuth<IEvent>({
            url: API_URL.event(`/update/${eventId}`),
            method: 'PATCH',
            data
        })

        return response
    }

    async delete(eventId: string) {
        const response = await apiWithAuth<IEvent>({
            url: API_URL.event(`/delete/${eventId}`),
            method: 'DELETE',
        })

        return response
    }

}

export const eventService = new EventService()