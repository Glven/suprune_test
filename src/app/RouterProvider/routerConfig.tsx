import { createBrowserRouter } from "react-router-dom";
import { ErrorFallback } from "@/pages/ErrorFallback";
import {LOGIN_PAGE, MAIN_PAGE, ORGANIZATION_PAGE, ORGANIZATIONS_PAGE} from "@/shared/lib/configs/paths.ts";
import {AuthLayout, MainLayout} from "@/widgets/layout";
import { Suspense } from "react";
import { Loading } from "@/shared/ui/Loading";
import {MainPageAsync} from "@/pages/Main";
import {OrganizationPageAsync, OrganizationsPageAsync} from "@/pages/Organization";
import {AuthGuard} from "@/widgets/AuthGuard";
import {LoginAsync} from "@/pages/Profile";



export function routerConfig() {
    // @ts-ignore
    return createBrowserRouter([
        {
            element: <AuthGuard><MainLayout /></AuthGuard>,
            errorElement: <ErrorFallback />,
            children: [
                {
                    path: MAIN_PAGE,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <MainPageAsync />
                        </Suspense>
                    )
                },
                {
                    path: ORGANIZATIONS_PAGE,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <OrganizationsPageAsync />
                        </Suspense>
                    )
                },
                {
                    path: ORGANIZATION_PAGE,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <OrganizationPageAsync/>
                        </Suspense>
                    )
                }
            ]
        },
        {
            element: <AuthGuard requireAuth={false}><AuthLayout /></AuthGuard>,
            children: [
                {
                    path: LOGIN_PAGE,
                    element: (
                        <Suspense fallback={<Loading />}>
                            <LoginAsync />
                        </Suspense>
                    )
                }
            ]
        }
    ], {
        basename: '/suprune_test'
    });
};
