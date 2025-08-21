import { paths } from "@/configs/paths";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { createBrowserRouter, Route, RouterProvider } from "react-router";


import {
    default as AppRoot,
    ErrorBoundary as AppRootErrorBoundary,
} from './routes/app/root';
import { ProductList } from "@/features/product/components/view-product";
import { OrderList } from "@/features/orders/components/view-orders";
import { TransactionList } from "@/features/transaction/component/view-transactions";
import { DashboardRoute } from "./routes/app/app/dashboard";



const convert = (queryClient: QueryClient) => (m: any) => {
    const { clientLoader, clientAction, default: Component, ...rest } = m;
    return {
        ...rest,
        loader: clientLoader?.(queryClient),
        action: clientAction?.(queryClient),
        Component,
    };
};



export const createAppRouter = (queryClient: QueryClient) =>
    createBrowserRouter([
        {
            path: paths.auth.login.path,
            lazy: () => import('../app/routes/app/auth/login').then(convert(queryClient)),
        },
        {
            path: paths.auth.register.path,
            lazy: () => import('../app/routes/app/auth/register').then(convert(queryClient)),
        },
        {
            path: paths.app.dashboard.path,
            element: (<DashboardRoute />),
            ErrorBoundary: AppRootErrorBoundary,
            children: [
                { index: true, Component: ProductList },
                { path: "orders", Component: OrderList },
                { path: "transactions", Component: TransactionList }
            ]

        },
    ])


export const AppRouter = () => {
    const queryClient = useQueryClient();

    const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

    return <RouterProvider router={router} />;
};