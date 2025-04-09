import {useState} from "react";
import {OrganizationType, organizationTypes} from "@/entities/organization";
import {OptionType} from "@/shared/ui/Select";

export const useOrganizationDetails = (organization: OrganizationType) => {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newOrganization, setNewOrganization] = useState<OrganizationType>({...organization});

    const {contract, type, businessEntity} = organization;


    const handleClick = () => {
        setIsEdit(true);
    }

    const handleSave = () => {

    }

    const handleCancel = () => {
        setNewOrganization(organization);
        setIsEdit(false);
    }

    const [day, month, year] = new Date(contract.issue_date)
        .toLocaleDateString('ru-RU')
        .split('.');
    const swapped = `${month}.${day}.${year}`;

    const handleContractNoChange = (value: string) => {

        setNewOrganization(prev => ({
            ...prev,
            contract: {...prev.contract, no: value}
        }));
    }

    const handleContactDateChange = (value: string) => {

        const newValue = new Date(value + "T00:00:00Z").toISOString();

        setNewOrganization(prev => ({
            ...prev,
            contract: {...prev.contract, issue_date: newValue}
        }));
    }

    const typesString = type
        .map(t => organizationTypes[t])
        .join(', ')

    const [newDay, newMonth, newYear] = new Date(newOrganization.contract.issue_date)
        .toLocaleDateString('ru-RU')
        .split('.');
    const newOrgDate = `${newYear}-${newMonth}-${newDay}`;

    const handleBusinessEntityChange = (value: OptionType) => {
        setNewOrganization(prev => ({
            ...prev,
            businessEntity: value.label
        }))
    }

    const handleTypesChange = (values: OptionType[]) => {
        setNewOrganization(prev => ({
            ...prev,
            type: values.map(v => v.value) as string[]
        }))
    }

    return {
        newOrganization,
        newOrgDate,
        handleCancel,
        handleContractNoChange,
        handleContactDateChange,
        handleSave,
        handleClick,
        isEdit,
        swapped,
        typesString,
        handleBusinessEntityChange,
        handleTypesChange
    }
}