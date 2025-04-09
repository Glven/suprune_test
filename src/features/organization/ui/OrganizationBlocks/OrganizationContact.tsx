import {ContactType} from "@/entities/contact";
import {OrganizationBlockInfo} from "@/entities/organization";
import {OrganizationBlockChooseSave, OrganizationBlockEdit} from "@/features/organization/ui/OrganizationBlockButtons";
import {memo, ReactNode} from "react";
import cls from './OrganizationBlocks.module.sass';
import {Input} from "@/shared/ui/Input";
import {useOrganizationContact} from "@/features/organization";
import {observer} from "mobx-react-lite";

type Props = {
    contact: ContactType|null
}

const OrganizationContactComp = observer(({contact}:Props) => {

    const {
        isEdit,
        handleNameChange,
        handleCancel,
        handleSave,
        handleClick,
        handleEmailChange,
        handlePhoneChange,
        newContact,
        formatPhone
    } = useOrganizationContact(contact)

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
                            {formatPhone(contact?.phone || '')}
                        </p> :
                        <div className={cls.field__input}>
                            <Input
                                handleChange={handlePhoneChange}
                                type={"phone"}
                                value={formatPhone(newContact.phone)}
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
})

export const OrganizationContact = memo(OrganizationContactComp);