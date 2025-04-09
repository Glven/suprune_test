import {
    OrganizationBlockInfo,
    organizationBusinessTypes,
    OrganizationType,
    organizationTypes
} from "@/entities/organization";
import {memo, ReactNode, useState} from "react";
import {OrganizationBlockChooseSave, OrganizationBlockEdit} from "@/features/organization/ui/OrganizationBlockButtons";
import cls from './OrganizationBlocks.module.sass';
import {Input} from "@/shared/ui/Input";
import {clsx} from "clsx";
import {useOrganizationDetails} from "@/features/organization";
import {SelectMultiple, SelectSingle} from "@/shared/ui/Select";
import {observer} from "mobx-react-lite";

type Props = {
    organization: OrganizationType;
}

const OrganizationDetailsComp = observer(({organization} : Props) => {

    const {
        isEdit,
        handleClick,
        handleCancel,
        handleSave,
        handleContractNoChange,
        handleContactDateChange,
        swapped,
        typesString,
        newOrganization,
        newOrgDate,
        handleBusinessEntityChange,
        handleTypesChange
    } = useOrganizationDetails(organization);

    const {contract, type, businessEntity} = newOrganization;


    return (
        <OrganizationBlockInfo
            title={'Company details'}
            button={!isEdit ?
                <OrganizationBlockEdit handleClick={handleClick}/> as ReactNode :
                <OrganizationBlockChooseSave
                    handleSave={handleSave}
                    handleCancel={handleCancel}
                /> as ReactNode
            }
        >

            <div className={cls.fields}>
                {!isEdit ?
                    <div className={cls.field}>
                        <p className={cls.field__label}>Agreement:</p>
                        <p className={cls.field__value}>{contract.no} / {swapped}</p>
                    </div> :
                    <div className={clsx(cls.field, cls.fieldTwoRows)}>
                        <p className={cls.field__label}>Agreement:</p>
                        <div className={cls.field__input}>
                            <Input
                                handleChange={handleContractNoChange}
                                value={newOrganization.contract.no}
                            />
                        </div>
                        <p className={cls.field__label}>Date:</p>
                        <div className={cls.field__input}>
                            <Input
                                type={'date'}
                                handleChange={handleContactDateChange}
                                value={newOrgDate}
                            />
                        </div>
                    </div>
                }
                <div className={cls.field}>
                    <p className={cls.field__label}>Business entity:</p>
                    {!isEdit ?
                        <p className={cls.field__value}>{businessEntity}</p> :
                        <div className={cls.field__input}>
                            <SelectSingle
                                options={Object.keys(organizationBusinessTypes).map(key => ({
                                    value: key,
                                    label: organizationBusinessTypes[key],
                                }))}
                                placeholder={'Select business entity'}
                                initValue={{
                                    value: newOrganization.businessEntity,
                                    label: organizationBusinessTypes[newOrganization.businessEntity],
                                }}
                                handleSelect={handleBusinessEntityChange}
                            />
                        </div>
                    }
                </div>
                <div className={cls.field}>
                    <p className={cls.field__label}>Company type:</p>
                    {!isEdit ?
                        <p className={cls.field__value}>{typesString}</p> :
                        <div className={cls.field__input}>
                            <SelectMultiple
                                options={Object.keys(organizationTypes).map(key => ({
                                    value: key,
                                    label: organizationTypes[key],
                                }))}
                                initValues={type.map(t => ({
                                    value: t,
                                    label: organizationTypes[t],
                                }))}
                                placeholder={'Select type of organization'}
                                handleSelect={handleTypesChange}
                            />
                        </div>
                    }
                </div>
            </div>
        </OrganizationBlockInfo>
    )
})

export const OrganizationDetails = memo(OrganizationDetailsComp);