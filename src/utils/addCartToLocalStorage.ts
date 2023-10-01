
import { EventData } from "../store/types/EventSchema";

export const addCartToLocalStorage = (data: EventData, key: string) => {
    if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify([data]))
    }
    if (localStorage.getItem(key)) {
        const cart = JSON.parse(localStorage.getItem(key) || '');
        cart.push(data)
        localStorage.setItem(key, JSON.stringify(cart))
    }

}