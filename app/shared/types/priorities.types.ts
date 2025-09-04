export const priorities = [
    {
        value: "LOW",
        label: "Низкий"
    },
    {
        value: "MEDIUM",
        label: "Средний"
    },
    {
        value: "HIGH",
        label: "Высокий"
    },
    {
        value: "DREAM",
        label: "Мечта"
    },
]

const prioritiesValues = priorities.map(p => p.value)
export type Priority = (typeof priorities)[number]['value']