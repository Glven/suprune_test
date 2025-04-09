import {ContactType} from "@/entities/contact";
import {OrganizationBlockInfo} from "@/entities/organization";
import {OrganizationBlockChooseSave, OrganizationBlockEdit} from "@/features/organization/ui/OrganizationBlockButtons";
import {memo, ReactNode} from "react";
import cls from './OrganizationBlocks.module.sass';
import {Input} from "@/shared/ui/Input";
import {useOrganizationContact} from "@/features/organization";

type Props = {
    contact: ContactType|null
}

const OrganizationContactComp = ({contact}:Props) => {

    const {
        isEdit,
        handleNameChange,
        handleCancel,
        handleSave,
        handleClick,
        handleEmailChange,
        handleFieldChange,
        newContact
    } = useOrganizationContact(contact)

    console.log(newContact)

    return (
        <OrganizationBlockInfo
            title={'Contacts'}
            button={!isEdit ?
                <OrganizationBlockEdit handleClick={handleClick}/> as ReactNode :
                <OrganizationBlockChooseSave
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                /> as ReactNode
            }>

            <div className={cls.fields}>


                <div className={cls.field}>
                    <p className={cls.field__label}>
                        Responsible person:
                    </p>
                    {!isEdit ?
                        <p className={cls.field__value}>
                            {contact?.firstname} {contact?.lastname}
                        </p> :
                        <div className={cls.field__input}>
                            <Input
                                handleChange={handleNameChange}
                                value={`${newContact.firstname} ${newContact.lastname}`}
                            />
                        </div>
                    }
                </div>


                <div className={cls.field}>
                    <p className={cls.field__label}>
                        Phone number:
                    </p>
                    {!isEdit ?
                        <p className={cls.field__value}>
                            {contact?.phone}
                        </p> :
                        <div className={cls.field__input}>
                            <Input
                                handleChange={(value: string) => handleFieldChange(value, 'phone')}
                                value={newContact.phone}
                            />
                        </div>
                    }
                </div>


                <div className={cls.field}>
                    <p className={cls.field__label}>
                        E-mail:
                    </p>
                    {!isEdit ?
                        <p className={cls.field__value}>
                            {contact?.email}
                        </p> :
                        <div className={cls.field__input}>
                            <Input
                                handleChange={handleEmailChange}
                                value={newContact.email}
                            />
                        </div>
                    }
                </div>

            </div>

        </OrganizationBlockInfo>
    )
}

export const OrganizationContact = memo(OrganizationContactComp);