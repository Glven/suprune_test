import {Button} from "@/shared/ui/Button";
import {AddPhoto} from "@/shared/ui/Icons";
import {ChangeEvent, ReactNode, useRef, useState} from "react";
import {Modal} from "@/shared/ui/Modal";
import {useOrganizationApi} from "@/features/organization";


type Props = {
    organizationId: string
}

export const OrganizationBlockAddImg = ({organizationId}: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const {addOrganizationPhoto} = useOrganizationApi();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const inputReset = () => {
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const handleCancel = () => {
        setIsOpen(false);
        setFile(null);
        inputReset();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files[0] || null;

        setFile(file);
    }

    const handleSave = () => {

        if (!file) {
            alert('Необходимо выбрать изображение');
            return;
        }


        addOrganizationPhoto(organizationId, file);
        setIsOpen(false);
        setFile(null)
        inputReset();
    }

    return (
        <div>
            <Button
                type={'flutted'}
                onClick={() => setIsOpen(true)}
                icon={<AddPhoto/> as ReactNode}
            >
                Add
            </Button>

            <Modal
                isOpen={isOpen}
                handleCancel={handleCancel}
                title={'Add Image'}
            >
                <input
                    type={'file'}
                    onChange={handleChange}
                    accept=".jpg,.jpeg"
                    ref={fileInputRef}
                />

                <div style={{
                    display: 'flex',
                    marginTop: '20px',
                    gap: 12
                }}>
                    <Button
                        type={'outlined'}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button
                        type={'filled'}
                        onClick={handleSave}
                    >
                        Add photo
                    </Button>
                </div>
            </Modal>
        </div>
    )
}