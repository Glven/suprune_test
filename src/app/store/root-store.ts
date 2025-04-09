import {UserStore} from "@/entities/user";
import {OrganizationStore} from "@/entities/organization";
import {ContactStore} from "@/entities/contact";

export class Store {
    userStore: UserStore;
    organizationStore: OrganizationStore;
    contactStore: ContactStore;

    constructor() {
        this.userStore = new UserStore()
        this.organizationStore = new OrganizationStore()
        this.contactStore = new ContactStore()
    }
}

export const store = new Store()