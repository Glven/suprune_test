import {clsx} from "clsx";

type Props = {
    className?: string
}

export const Close = ({ className }: Props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={clsx({className: className})} xmlns="http://www.w3.org/2000/svg">
            <path d="M15.625 4.375L4.375 15.625" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M15.625 15.625L4.375 4.375" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    )
}