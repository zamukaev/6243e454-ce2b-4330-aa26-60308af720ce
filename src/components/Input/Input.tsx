import { FC, InputHTMLAttributes } from 'react';

import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlineClear } from 'react-icons/md';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    isFocus: boolean;
    onChange?: (value: string) => void;
    onClear?: () => void;
}

export const Input: FC<InputProps> = (props) => {
    const { className, value, type, placeholder, onChange, isFocus, onClear, ...otherProps
    } = props;

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value)
    }

    return (
        <div className={styles.inputContainer}>
            <input type={type}
                onChange={changeHandler}
                placeholder={placeholder}
                className={`${styles.input} ${className}`}
                value={value}
                {...otherProps}
            />
            {!isFocus && <div className={styles.placeholder}>
                <BiSearchAlt2 size={12} className={styles.searchIcon} />
                <span className={styles.searchText}>Search...</span>
            </div>}
            {value && <MdOutlineClear className={styles.clearInput} onClick={onClear} size={12} />}
        </div>

    );
}