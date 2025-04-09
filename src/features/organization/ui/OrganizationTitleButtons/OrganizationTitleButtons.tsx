import {OrganizationType} from "@/entities/organization";
import cls from './OrganizationTitleButtons.module.sass';
import {Edit, Trash} from "@/shared/ui/Icons";
import {useState} from "react";
import {Modal} from "@/shared/ui/Modal";
import {Input} from "@/shared/ui/Input";
import {Button} from "@/shared/ui/Button";

type Props = {
    organization: OrganizationType
}

export const OrganizationTitleButtons = ({organization}: Props) => {

    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
    const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
    const [newOrganization, setNewOrganization] = useState<OrganizationType>(organization);

    const handleChangeName = (value: string) => {
        setNewOrganization(prev => ({
            ...prev,
            name: value
        }))
    }

    const handleCancel = () => {
        setIsOpenEdit(false)
        setIsOpenDelete()
    };

    return (
        <div className={cls.buttons}>
            <button
                className={cls.buttons__edit}
                onClick={() => setIsOpenEdit(true)}
            >
                <Edit/>
            </button>
            <button
                className={cls.buttons__delete}
                onClick={() => setIsOpenDelete(true)}
            >
                <Trash/>
            </button>


            <Modal
                title={'Specify the Organization\'s name'}
                isOpen={isOpenEdit}
                handleCancel={handleCancel}
            >

                <Input
                    handleChange={handleChangeName}
                    value={organization.name}
                />

                <div className={cls.modalButtons}>
                    <Button
                        type={'outlined'}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button type={'filled'}>
                        Save changes
                    </Button>
                </div>


            </Modal>


            <Modal
                isOpen={isOpenDelete}
                handleCancel={handleCancel}
                title={'Remove the Organization?'}
            >
                <p className={cls.modalText}>
                    Are you sure you want to remove this Organozation?
                </p>

                <div className={cls.modalButtons}>
                    <Button
                        type={'outlined'}
                        onClick={handleCancel}
                    >
                        No
                    </Button>
                    <Button type={'filled'}>
                        Yes, remove
                    </Button>
                </div>

            </Modal>


        </div>
    )

}