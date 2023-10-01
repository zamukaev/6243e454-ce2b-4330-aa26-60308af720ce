export const useDateWithDateString = (date?: string) => {
    if (date) {
        const eventDate = new Date(date)
        return eventDate.toDateString();
    }
}