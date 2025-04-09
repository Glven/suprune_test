import {Button} from "@/shared/ui/Button";
import {Check, Close} from "@/shared/ui/Icons";
import {ReactNode} from "react";

type Props = {
    handleSave: () => void
    handleCancel: () => void
}

export const OrganizationBlockChooseSave = ({handleSave, handleCancel} : Props) => {
    return (
        <div style={{display: 'flex', gap: 12}}>
            <Button
                type={'flutted'}
                icon={<Check/> as ReactNode}
                onClick={handleSave}
            >
                Save changes
            </Button>
            <Button
                type={'flutted'}
                onClick={handleCancel}
                icon={<Close/> as ReactNode}
            >
                Cancel
            </Button>
        </div>
    )
}