export interface IWish {
    title: string,
    eventId: string,
    price: number,
    link: string,
    emoji: string,
    priority: "LOW" | "MEDIUM" | "HIGH" | "DREAM",
}

export interface IWishResponse extends IWish {
    id: string,
    createdAt: Date,
    updatedAt: Date,
    userId: string
}