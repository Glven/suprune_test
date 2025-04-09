import {ContactType} from "@/entities/contact";
import {useEffect, useState} from "react";
import {toJS} from "mobx";
import {useContactApi} from "@/features/contact";

export const useOrganizationContact = (contact: ContactType|null) => {

    const [newContact, setNewContact] = useState<ContactType>(contact ? toJS(contact) : {
        createdAt: '',
        email: '',
        updatedAt: '',
        firstname: '',
        lastname: '',
        id: '',
        phone: ''
    });

    const {updateContactData} = useContactApi();

    useEffect(() => {
        setNewContact(toJS(contact));
    }, [contact]);

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleClick = () => {
        setIsEdit(true);
    }

    const handleSave = () => {
        updateContactData(newContact);
        setIsEdit(false);
    }

    const handleCancel = () => {
        setIsEdit(false);
        setNewContact(contact);
    }

    const handlePhoneChange = (value: string) => {

        const newValue = value.replace(/\D/g, '');

        setNewContact(prev => ({
            ...prev,
            phone: newValue
        }))
    }

    const handleNameChange = (value: string) => {
        const lastSpaceIndex = value.lastIndexOf(' ');


        if (lastSpaceIndex === -1) {
            setNewContact(prev => ({
                ...prev,
                firstname: value,
                lastname: '',
            }));
        } else {
            setNewContact(prev => ({
                ...prev,
                firstname: value.substring(0, lastSpaceIndex),
                lastname: value.substring(lastSpaceIndex + 1),
            }));
        }
    }

    const handleEmailChange = (value: string) => {
        setNewContact(prev => ({
            ...prev,
            email: value
        }))
    }

    const formatPhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, '');

        const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

        if (match) {
            return `+${match[1]} ${match[2]} ${match[3]}-${match[4]}-${match[5]}`;
        }

        return phone;
    };

    return {
        handleCancel,
        handleClick,
        handleSave,
        newContact,
        handleNameChange,
        handleEmailChange,
        handlePhoneChange,
        isEdit,
        formatPhone
    }
}