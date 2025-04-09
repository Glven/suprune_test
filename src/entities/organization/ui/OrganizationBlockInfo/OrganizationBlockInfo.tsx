import cls from './OrganizationBlockInfo.module.sass';
import {memo, ReactNode} from "react";

type Props = {
    children: ReactNode
    title: string
    button: ReactNode
}

const OrganizationBlockInfoComp = ({children, title, button} : Props) => {
    return (
        <div className={cls.block}>
            <div className={cls.blockTitle}>
                <h3 className={cls.blockTitle__text}>{title}</h3>
                {button}
            </div>

            {children}
        </div>
    )
}

export const OrganizationBlockInfo = memo(OrganizationBlockInfoComp)