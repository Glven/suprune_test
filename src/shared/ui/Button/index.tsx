import {ReactNode} from "react";
import cls from "./Button.module.sass";
import {clsx} from "clsx";

type IButton = {
    type: "filled"|"outlined"|"flutted"|"icon"|"filled-icon",
    icon?: ReactNode|string
    children?: string
    onClick?: () => void
    htmlType?: 'submit'|'reset',
    className?: string
}


export const Button = ({type, icon, children, onClick, htmlType, className} : IButton) => {

    const handleClick = () => {
        onClick && onClick();
    }

    return (
        <button
            type={htmlType}
            onClick={handleClick}
            className={clsx(cls.button, {
                [className]: className,
                [cls.buttonFilled]: type === "filled",
                [cls.buttonOutline]: type === 'outlined',
                [cls.buttonFlutted]: type === "flutted",
                [cls.buttonIcon]: type === 'icon',
                [cls.buttonFilledIcon]: type === 'filled-icon'
            })}
        >
            <span>
                {icon}
            </span>
            {children}
        </button>
    )
}