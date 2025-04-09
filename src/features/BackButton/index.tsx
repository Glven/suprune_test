import {Button} from "@/shared/ui/Button";
import {Left} from "@/shared/ui/Icons";
import {ReactNode} from "react";
import cls from './BackBtn.module.sass';
import {useNavigate} from "react-router-dom";

export const BackButton = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

    return (
        <Button
            className={cls.btn}
            type={'icon'}
            onClick={handleClick}
            icon={<Left/> as ReactNode}
        />
    )
}