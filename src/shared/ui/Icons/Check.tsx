import {clsx} from "clsx";

type Props = {
    className?: string;
}

export const Check = ({className}: Props) => {
    return (
        <svg width="15" height="12" viewBox="0 0 15 12" fill="none" className={clsx({className: className})} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.875 1.62537L5.125 10.375L0.75 6.00037" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    )
}