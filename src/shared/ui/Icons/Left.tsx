import {clsx} from "clsx";

type Props = {
    className?: string;
}

export const Left = ({ className }: Props) => {
    return (
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" className={clsx({className: className})} xmlns="http://www.w3.org/2000/svg">
            <path d="M7 1L1 7L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}