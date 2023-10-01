import { RouteProps } from "react-router-dom";
import { MainPageAsync } from "../../../pages/MainPage/MainPageAsync";
import { CartAsync } from "../../../pages/Cart/CartAsync";
import { NotFoundAsync } from "../../../pages/NotFound/NotFoundAsync";

export enum AppRoutes {
    MAIN = 'main',
    CART = 'cart',
    NOT_FOUND_PAGE = 'notFoundPage',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.NOT_FOUND_PAGE]: '*',
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPageAsync />
    },
    [AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <CartAsync />
    },
    [AppRoutes.NOT_FOUND_PAGE]: {
        path: RoutePath.notFoundPage,
        element: <NotFoundAsync />
    }
}