import {Button} from "@/shared/ui/Button";
import {AddPhoto} from "@/shared/ui/Icons";
import {ReactNode} from "react";

type Props = {
    handleClick: () => void
}

export const OrganizationBlockAddImg = ({handleClick}: Props) => {
    return <Button
        type={'flutted'}
        onClick={handleClick}
        icon={<AddPhoto/> as ReactNode}
    >
        Add
    </Button>
}