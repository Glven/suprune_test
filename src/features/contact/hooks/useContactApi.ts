import {useState} from "react";
import {useStore} from "@/app/providers/store-providers.tsx";
import {api} from "@/shared/api/api.ts";
import {ContactType} from "@/entities/contact";

export const useContactApi = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const {contactStore} = useStore();

    const fetchContact = async(contactId: string) => {
        setIsLoading(true);

        try {
            const {data} = await api.get<ContactType>(`/contacts/${contactId}`);

            if (contactStore.contact) return;

            contactStore.setContact(data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    }

    const updateContactData = async(contact: ContactType) => {
        const {
            lastname,
            firstname,
            id,
            email,
            phone
        } = contact;

        try {
            const {data} = await api.patch(`/contacts/${id}`, {
                lastname,
                firstname,
                phone,
                email
            })

            if (!data) return;

            contactStore.setContact({...contactStore.contact, ...data});
            alert('Данные обновлены');
        } catch (e) {
            console.error(e);
        }
    }

    return {
        contact: contactStore.contact,
        fetchContact,
        isLoading,
        updateContactData
    }
}