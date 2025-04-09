import { useState, useEffect } from 'react';
import {useStore} from "@/app/providers/store-providers.tsx";

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {userStore} = useStore()


    useEffect(() => {
        const checkAuth = async () => {
            try {
                setIsAuthenticated(!!userStore.isAuth);
            } finally {
                setIsLoading(false);
            }
        };

        checkAuth();
    }, [userStore.isAuth]);

    return { isAuthenticated, isLoading };
};