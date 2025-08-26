import type { IUser } from "~/entities/user/model/user.types"
import type { IWish, IWishResponse } from "~/entities/wish/model/wish.types"

export interface IEvent {
    title: string,
    emoji: string,
    date: string,
    slug?: string
}


export interface IEventResponse extends IEvent {
    userId: string,
    id: string,
    user: IUser
    wish: IWishResponse[],
}

export interface IEventsWishes {
    id: string,
    title: string,
    slug: string,
    emoji: string,
    userId: string,
    wish?: IWish[]
}