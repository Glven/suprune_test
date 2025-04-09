import {makeAutoObservable} from "mobx";

export class UserStore {
    isAuth: boolean = false;
    authToken: string|null = null;

    constructor() {
        makeAutoObservable(this);
        this.loadFromLocalStorage();
    }

    setIsAuth(isAuth: boolean) {
        this.isAuth = isAuth;
        this.saveToLocalStorage();
    }

    setToken(token: string|null) {
        this.authToken = token;
        this.saveToLocalStorage();
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('userStore');
        if (data) {
            try {
                const parsed = JSON.parse(data);
                this.isAuth = parsed.isAuth ?? false;
                this.authToken = parsed.authToken ?? null;
            } catch (e) {
                console.error('Ошибка при загрузке userStore из localStorage:', e);
            }
        }
    }

    saveToLocalStorage() {
        localStorage.setItem('userStore', JSON.stringify({
            isAuth: this.isAuth,
            authToken: this.authToken,
        }));
    }

    logout() {
        this.isAuth = false;
        this.saveToLocalStorage();
        localStorage.removeItem('userStore');
    }
}

