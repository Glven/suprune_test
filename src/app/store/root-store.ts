import {UserStore} from "@/entities/user";

export class Store {
    userStore: UserStore

    constructor() {
        this.userStore = new UserStore()
    }
}

export const store = new Store()