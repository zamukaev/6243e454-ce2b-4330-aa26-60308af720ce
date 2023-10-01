import { CartSchema } from "./CartSchema";
import { EventSchema } from "./EventSchema";
import { SearchSchema } from "./SearchSchema";
export interface StateSchema {
    event: EventSchema;
    cart: CartSchema;
    search: SearchSchema;
}