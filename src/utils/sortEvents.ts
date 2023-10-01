import { EventData } from "../store/types/EventSchema";

export const sortEvents = (events: EventData[]) => {
    const result: Array<Record<string, EventData[]>> = [];
    const sortedEvents: EventData[] = events.filter((event: EventData) => event.flyerFront)
        .sort((a: EventData, b: EventData) => new Date(a.date).getTime() - new Date(b.date).getTime())
    const groupedEvents: { [date: string]: EventData[] } = {};

    sortedEvents.forEach((event) => {
        const dateKey = event.date;
        if (!groupedEvents[dateKey]) {
            groupedEvents[dateKey] = [];
        }
        groupedEvents[dateKey].push(event);
        // result.push(groupedEvents);
    });

    return groupedEvents
}