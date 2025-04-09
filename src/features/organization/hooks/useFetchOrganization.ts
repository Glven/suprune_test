import {api} from "@/shared/api/api.ts";
import {OrganizationType} from "@/entities/organization";
import {useState} from "react";

export const useFetchOrganization = () => {

    const [organization, setOrganization] = useState<OrganizationType|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchComp = async(id: number) => {
        setIsLoading(true);

        try {

            const {data} = await api.get<OrganizationType>(`/companies/${id}`);

            if (!data) return;

            console.log(data)

            setOrganization(data);

        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    return {organization, fetchComp, isLoading}
}