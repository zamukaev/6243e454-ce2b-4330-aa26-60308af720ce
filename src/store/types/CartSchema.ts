import { EventData } from "./EventSchema";

export interface CartSchema {
    cart?: EventData[];
    counter: number,
}