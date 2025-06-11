export interface IWishes {
    title: string,
    price: number,
    link: string,
    emoji: string
}

export const wishes = [
    {
        emoji: "🎁",
        title: "Книги по саморазвитию",
        link: "#",
        price: 1500,
        priority: "LOW"
    },
    {
        emoji: "🍽️",
        title: "Обед в любимом ресторане",
        link: "#",
        price: 3000,
        priority: "MIDDLE"
    },
    {
        emoji: "🚗",
        title: "Новая машина",
        link: "#",
        price: 2000000,
        priority: "HIGH"
    },
    {
        emoji: "🏞",
        title: "Путешествие в Италию",
        link: "#",
        price: 150000,
        priority: "DREAM"
    },
    {
        emoji: "📱",
        title: "Новый смартфон",
        link: "#",
        price: 80000,
        priority: "HIGH"
    },
    {
        emoji: "💃",
        title: "Уроки танцев",
        link: "#",
        price: 10000,
        priority: "MIDDLE"
    },
    // {
    //     emoji: "🖌️",
    //     title: "Набор кистей художника",
    //     link: "#",
    //     price: 5000,
    //     priority: "LOW"
    // }
];