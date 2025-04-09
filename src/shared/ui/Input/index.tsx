import cls from './Input.module.sass';
import {ChangeEvent, useState} from "react";

type Input = {
    handleChange: (value: string) => void;
    placeholder?: string
    required?: boolean
    value: string
    type?: 'date'
}

export const Input = ({handleChange, placeholder, required = false, value, type}: Input) => {
    const [thisValue, setThiValue] = useState(value);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleChange(e.target.value)
        setThiValue(e.target.value)
    }

    return <input
        className={cls.input}
        required={Boolean(required)}
        type={type || 'text'}
        value={thisValue}
        onChange={handleInputChange}
        placeholder={placeholder ? placeholder : ""}
    />
}