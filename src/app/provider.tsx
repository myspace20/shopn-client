import { Spinner } from "@/components/ui/spinner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MainErrorFallback } from "@/components/errors/main";
import { queryConfig } from "@/lib/react-query";


type AppProviderProps = {
    children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
    const [queryClient] = React.useState(
        () =>
            new QueryClient({
                defaultOptions: queryConfig,
            }),
    );

    return (
        <React.Suspense
            fallback={
                <div className="flex h-screen w-screen items-center justify-center">
                    <Spinner />
                </div>
            }
        >
            <ErrorBoundary FallbackComponent={MainErrorFallback}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </ErrorBoundary>

        </React.Suspense>
    );
};