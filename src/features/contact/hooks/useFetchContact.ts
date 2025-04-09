import {useState} from "react";
import {ContactType} from "@/entities/contact";
import {api} from "@/shared/api/api.ts";

export const useFetchContact = () => {
    const [contact, setContact] = useState<ContactType|null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchContact = async(contactId: string) => {
        setIsLoading(true);

        try {
            const {data} = await api.get<ContactType>(`/contacts/${contactId}`);

            setContact(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    return {contact, fetchContact, isLoading}
}