import cls from './Select.module.sass';
import {useEffect, useRef, useState} from "react";
import {Check, Left} from "@/shared/ui/Icons";
import {clsx} from "clsx";
import {OptionType} from './OptionType.ts';

type Props = {
    options: OptionType[];
    handleSelect?: (value: OptionType[]) => void;
    initValues?: OptionType[];
    placeholder?: string
}

export const SelectMultiple = ({options, handleSelect, initValues, placeholder} : Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [values, setValues] = useState<OptionType[]>(initValues || []);
    const selectRef = useRef<HTMLDivElement>(null)

    const handleHeadClick = () => setIsOpen(prev => !prev);

    const handleSelectChange = (value: OptionType) => {
        setValues(prev => {
            if (prev.find(v => value.value === v.value)) {
                return prev.filter(v => v.value !== value.value);
            } else {
                return [...prev, value]
            }
        })
    }

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

    useEffect(() => {
        handleSelect && handleSelect(values);
    }, [values]);

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
                <p className={cls.selectHead__text}>
                    {values.map(v => v.label).join(', ') || placeholder || 'Select' }
                </p>
                <p className={cls.selectHead__icon}>
                    <Left/>
                </p>
            </div>
            <div className={cls.selectMenu}>
                {options.map(o =>
                    <p
                        key={o.value}
                        className={clsx(cls.selectMenu__item, {
                            [cls.selectMenu__itemActive]: values.some(v => v.value === o.value)
                        })}
                        onClick={() => handleSelectChange(o)}
                    >
                        <span className={cls.selectMenu__itemCheckbox}>
                            <Check/>
                        </span>
                        <span>
                            {o.label}
                        </span>
                    </p>
                )}
            </div>
        </div>
    )
}