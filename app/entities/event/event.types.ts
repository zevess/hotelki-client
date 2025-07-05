import type { IWish, IWishResponse } from "../wish/wish.types"

export interface IEvent {
    title: string,
    emoji: string,
    date: Date,
    slug?: string
}


export interface IEventResponse extends IEvent {
    userId: string,
    id: string,
    wish: IWishResponse[],
}

export interface IEventsWishes{
    id: string,
    title: string,
    slug: string,
    emoji: string,
    userId: string,
    wish: IWish[]
}