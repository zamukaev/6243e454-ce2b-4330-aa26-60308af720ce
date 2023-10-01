import { useDispatch } from "react-redux";
import { createReduxStore } from "../store"

const store = createReduxStore()
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch