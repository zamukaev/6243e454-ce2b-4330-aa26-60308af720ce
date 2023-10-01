export const useDateWithLocaleString = (date: string) => {
    if (date) {
        const eventDate = new Date(date)
        return eventDate.toLocaleString();
    }
}