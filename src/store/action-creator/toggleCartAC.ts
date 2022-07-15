import { addCart, removeCart } from "../reducers/cartSlice";

export const addCartAC = (cart: any) => (addCart(cart));
export const removeCartAC = (_id: string) => (removeCart(_id));