import {ContactType} from "@/entities/contact";
import {makeAutoObservable} from "mobx";

export class ContactStore {
    contact: ContactType|null = null;

    setContact(contact: ContactType|null) {
        this.contact = contact;
    }

    constructor() {
        makeAutoObservable(this)
    }
}