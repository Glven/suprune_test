import {Button} from "@/shared/ui/Button";
import {Edit} from "@/shared/ui/Icons";
import {ReactNode} from "react";

type Props = {
    handleClick: () => void
}

export const OrganizationBlockEdit = ({handleClick} : Props) => {
    return <Button
        type={'flutted'}
        onClick={handleClick}
        icon={<Edit/> as ReactNode}
    >
        Edit
    </Button>
}