import {ContactType} from "@/entities/contact";
import {useEffect, useState} from "react";

export const useOrganizationContact = (contact: ContactType|null) => {
    const [newContact, setNewContact] = useState<ContactType>(contact ? contact : {
        createdAt: '',
        email: '',
        updatedAt: '',
        firstname: '',
        lastname: '',
        id: '',
        phone: ''
    });

    useEffect(() => {
        setNewContact(contact);
    }, [contact]);

    const [isEdit, setIsEdit] = useState<boolean>(false);

    const handleClick = () => {
        setIsEdit(true);
    }

    const handleSave = () => {

    }

    const handleCancel = () => {
        setIsEdit(false);
        setNewContact(contact);
    }

    const handleFieldChange = (value: string, key: string) => {

        if (key !== 'name') {
            setNewContact(prev => ({
                ...prev,
                [key]: value
            }));
            return;
        }
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

    return {
        handleCancel,
        handleClick,
        handleSave,
        newContact,
        handleNameChange,
        handleEmailChange,
        handleFieldChange,
        isEdit
    }
}