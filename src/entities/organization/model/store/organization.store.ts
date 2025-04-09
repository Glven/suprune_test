import {OrganizationType} from "@/entities/organization";
import {makeAutoObservable} from "mobx";

export class OrganizationStore {
    organization: OrganizationType|null = null;

    constructor() {
        makeAutoObservable(this);
    }

    setOrganization(organization: OrganizationType|null) {
        this.organization = organization;
    }
}