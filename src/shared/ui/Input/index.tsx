import cls from './Input.module.sass';
import {ChangeEvent, useState} from "react";
import {IMaskInput as ReactInputMask} from "react-imask";

type Input = {
    handleChange: (value: string) => void;
    placeholder?: string
    required?: boolean
    value: string
    type?: 'date'|'phone'
}

export const Input = ({handleChange, placeholder, required = false, value, type}: Input) => {
    const [thisValue, setThiValue] = useState(value);

    const handleInputChange = (value: string) => {
        handleChange(value);
        setThiValue(value);
    }

    if (type === 'phone') {
        return <ReactInputMask
            mask={'+0 000 000-00-00'}
            className={cls.input}
            placeholder={"+_ ___ ___-__-__"}
            value={thisValue}
            onAccept={(target) => handleInputChange(target)}
        />
    }

    return <input
        className={cls.input}
        required={Boolean(required)}
        type={type || 'text'}
        value={thisValue}
        onChange={e => handleInputChange(e.target.value)}
        placeholder={placeholder ? placeholder : ""}
    />
}