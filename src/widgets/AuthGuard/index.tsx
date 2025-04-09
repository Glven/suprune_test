import {LOGIN_PAGE, MAIN_PAGE} from "@/shared/lib/configs/paths.ts";
import {Navigate, useLocation} from "react-router-dom";
import {Loading} from "@/shared/ui/Loading";
import {ReactNode} from "react";
import {useAuth} from "@/features/auth";
import {observer} from "mobx-react-lite";

type Props = {
    children: ReactNode
    requireAuth?: boolean
}

export const AuthGuard = observer(({ children, requireAuth = true }: Props) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <Loading />;
    }

    if (requireAuth && !isAuthenticated) {
        return <Navigate to={LOGIN_PAGE} state={{ from: location }} replace />;
    }

    if (!requireAuth && isAuthenticated) {
        return <Navigate to={MAIN_PAGE} replace />;
    }

    return children;
})