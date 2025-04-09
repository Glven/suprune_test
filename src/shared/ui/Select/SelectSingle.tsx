import cls from './Select.module.sass';
import {useEffect, useRef, useState} from "react";
import {Left} from "@/shared/ui/Icons";
import {clsx} from "clsx";
import {OptionType} from './OptionType.ts';

type Props = {
    options: OptionType[];
    handleSelect?: (value: OptionType) => void;
    initValue?: OptionType;
    placeholder?: string
}

export const SelectSingle = ({options, handleSelect, initValue, placeholder} : Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState<OptionType|null>(initValue ? {...initValue} : null);
    const selectRef = useRef<HTMLDivElement>(null)

    const handleHeadClick = () => setIsOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelectChange = (value: OptionType) => {
        setValue(value);
        setIsOpen(false);
        handleSelect && handleSelect(value);
    }

    return (
        <div ref={selectRef} className={clsx(
            cls.select, {
                [cls.selectActive]: isOpen
            }
        )}>
            <div
                className={cls.selectHead}
                onClick={handleHeadClick}
            >
                <p className={cls.selectHead__text}>{value?.label || placeholder || 'Select'}</p>
                <p className={cls.selectHead__icon}>
                    <Left/>
                </p>
            </div>
            <div className={cls.selectMenu}>
                {options.map(o =>
                    <p
                        key={o.value}
                        className={clsx(cls.selectMenu__item, {
                            [cls.selectMenu__itemActive]: o.value === value?.value
                        })}
                        onClick={() => handleSelectChange(o)}
                    >
                        {o.label}
                    </p>
                )}
            </div>
        </div>
    )
}