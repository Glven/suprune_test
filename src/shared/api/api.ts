import axios from "axios";
import {BASE_URL} from "@/shared/constants/endPoints.ts";
import {LOGIN_PAGE} from "@/shared/lib/configs/paths.ts";

const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use((config) => {
    const userStore = localStorage.getItem('userStore');

    if (!userStore) return config;

    const {authToken: token} = JSON.parse(userStore);

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Токен истек или невалиден
            localStorage.removeItem('authToken');
            console.log(error)
            // window.location.href = LOGIN_PAGE; // Перенаправление на логин
        }
        return Promise.reject(error);
    }
)

export {api}