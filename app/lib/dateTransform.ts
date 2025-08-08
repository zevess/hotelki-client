import { differenceInDays, differenceInHours, differenceInMinutes, isAfter } from "date-fns";

export const getRemainingTime = (targetDateISO: string): string => {
    const now = new Date();
    const targetDate = new Date(targetDateISO);

    if (!isAfter(targetDate, now)) {
        return "Событие уже произошло";
    }

    let remaining = "";
    const days = differenceInDays(targetDate, now);
    const hours = differenceInHours(targetDate, now) % 24;
    const minutes = differenceInMinutes(targetDate, now) % 60;

    if (days > 0) remaining += `${days} дн. `;
    if (hours > 0) remaining += `${hours} ч. `;
    remaining += `${minutes} мин.`;

    return `Осталось ${remaining}`;
}