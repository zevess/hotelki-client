import type { IWishResponse } from "../wish/wish.types"

export interface IEvent {
    title: string,
    emoji: string,
    date: Date
}


export interface IEventResponse extends IEvent {
    userId: string,
    id: string,
    wish: IWishResponse[]
}