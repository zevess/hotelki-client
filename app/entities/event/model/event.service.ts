import { api, apiWithAuth } from "~/shared/api/api.interceptor";
import type { IEvent, IEventResponse } from "./event.types";
import { API_URL } from "~/shared/config/api.config";

class EventService {
    async getById(eventId: string | undefined) {
        const { data } = await api<IEvent>({
            url: API_URL.getEventById(eventId),
            method: 'GET'
        })
        return data
    }

    async getByUser(userId: string | undefined) {
        const { data } = await api<IEventResponse[]>({
            url: API_URL.getEventByUser(userId),
            method: 'GET'
        })
        return data
    }

    async getByUserAndSlug(userId: string | undefined, slug: string | undefined) {
        const { data } = await api<IEventResponse>({
            url: API_URL.getEventByUserAndSlug(userId, String(slug)),
            method: 'GET'
        })
        return data
    }

    async create(data: IEvent) {
        const response = await apiWithAuth<IEventResponse>({
            url: API_URL.createEvent(),
            method: 'POST',
            data
        })

        return response
    }

    async update(eventId: string, data: IEvent) {
        const response = await apiWithAuth<IEventResponse>({
            url: API_URL.updateEvent(eventId),
            method: 'PATCH',
            data
        })

        return response
    }

    async delete(eventId: string) {
        const response = await apiWithAuth<IEventResponse>({
            url: API_URL.deleteEvent(eventId),
            method: 'DELETE',
        })

        return response
    }

}

export const eventService = new EventService()