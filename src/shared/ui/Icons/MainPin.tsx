import {clsx} from "clsx";

type Props = {
    className?: string
}

export const MainPin = ({ className }: Props) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={clsx({className: className})} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 9C11.1046 9 12 8.10457 12 7C12 5.89543 11.1046 5 10 5C8.89543 5 8 5.89543 8 7C8 8.10457 8.89543 9 10 9Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path
                d="M15 7C15 11.5 10 15 10 15C10 15 5 11.5 5 7C5 5.67392 5.52678 4.40215 6.46447 3.46447C7.40215 2.52678 8.67392 2 10 2C11.3261 2 12.5979 2.52678 13.5355 3.46447C14.4732 4.40215 15 5.67392 15 7V7Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}