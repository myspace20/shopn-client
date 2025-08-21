

export const paths = {
    app: {
        root: {
            path: '/app',
            getHref: () => '/app',
        },
        dashboard: {
            path: '/app/dashboard',
            getHref: () => '/app/dashboard',
        }
    },
    auth: {
        register: {
            path: '/auth/register',
            getHref: (redirectTo?: string | null | undefined) =>
                `/auth/register${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
        },
        login: {
            path: '/auth/login',
            getHref: (redirectTo?: string | null | undefined) =>
                `/auth/login${redirectTo ? `?redirectTo=${encodeURIComponent(redirectTo)}` : ''}`,
        },
    },
}