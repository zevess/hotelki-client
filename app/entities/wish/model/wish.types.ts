import type { IEvent } from "~/entities/event/model/event.types";

export interface IWish {
    title: string,
    eventId?: string | null,
    price: number,
    link?: string | null,
    emoji: string,
    slug?: string,
    priority: "LOW" | "MEDIUM" | "HIGH" | "DREAM",
}

export interface IWishResponse extends IWish {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string,
    event?: IEvent
}