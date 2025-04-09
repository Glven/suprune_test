import {clsx} from "clsx";

type Props = {
    className?: string;
}

export const Search = ({className}: Props) => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={clsx({className: className})} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M8.0625 14.625C11.6869 14.625 14.625 11.6869 14.625 8.0625C14.625 4.43813 11.6869 1.5 8.0625 1.5C4.43813 1.5 1.5 4.43813 1.5 8.0625C1.5 11.6869 4.43813 14.625 8.0625 14.625Z"
                stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.7026 12.7032L16.4996 16.5001" stroke="white" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
        </svg>

    )
}