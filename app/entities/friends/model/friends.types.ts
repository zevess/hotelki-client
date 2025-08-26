import type { IUser } from "~/entities/user/model/user.types"

export interface IFriendResponse {
    id: string,
    createdAt: string,
    updatedAt: string,
    senderId: string,
    receiverId: string
}

export interface IFriendSendRequest extends IFriendResponse{
    status: FRIEND_STATUS.PENDING
}

export interface IFriendAcceptRequest extends IFriendResponse{
    status: FRIEND_STATUS.ACCEPTED
}

export interface IFriendDeclineRequest extends IFriendResponse{
    status: FRIEND_STATUS.BLOCKED
}

export interface IIncomingFriendRequests extends IFriendResponse {
    status: FRIEND_STATUS.PENDING,
    sender: IUser
}

export interface IOutgoingFriendRequests extends IFriendResponse {
    status: FRIEND_STATUS.PENDING,
    receiver: IUser
}


export enum FRIEND_STATUS {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    BLOCKED = "BLOCKED"
}