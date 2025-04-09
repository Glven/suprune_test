import {memo, ReactNode} from "react";
import cls from './OrganizationTitle.module.sass';
import {Button} from "@/shared/ui/Button";
import {Left} from "@/shared/ui/Icons";

type Props = {
    title: string
    buttons: ReactNode
    backBtn?: ReactNode
}

const OrganizationTitleComp = ({title, buttons, backBtn} : Props) => {
    return (
        <div className={cls.title}>
            <div className={cls.title__backBtn}>
                {backBtn}
            </div>
            <h1 className={cls.title__text}>{title}</h1>
            {buttons}
        </div>
    )
}

export const OrganizationTitle = memo(OrganizationTitleComp)