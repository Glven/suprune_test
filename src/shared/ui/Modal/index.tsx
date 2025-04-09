import cls from './Modal.module.sass'
import {ReactNode, useEffect, useRef} from "react";
import {clsx} from "clsx";

type Props = {
    isOpen: boolean
    handleCancel: () => void
    title?: string
    children: ReactNode,
    width?: number
}

export const Modal = ({isOpen, handleCancel, title, children, width}: Props) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleCancel();
            }
        };

        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleCancel();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div
            ref={modalRef}
            className={clsx(cls.modal, {
                [cls.modalActive]: isOpen,
            })}
            style={{width: width || 360}}
        >
            {title &&
                <h2 className={cls.modal__title}>{title}</h2>
            }
            {children}
        </div>
    )
}