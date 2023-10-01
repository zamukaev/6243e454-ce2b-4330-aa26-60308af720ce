import { ButtonHTMLAttributes, FC, useCallback } from 'react';

import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

export enum ButtonTheme {
    ROUND = 'round',
    ROUND_RED = 'red',
    OUTLINE = 'outline',
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: React.ReactNode;
    link?: boolean;
    href?: string;
    onClick?: () => void;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children,
        className,
        theme = ButtonTheme.CLEAR,
        onClick,
        link,
        href = '/'
    } = props;

    const clickHandler = useCallback(() => {
        if (onClick) {
            onClick()
        }
    }, [onClick])

    return (
        link ?
            <Link
                to={href}
                className={`${styles.button} ${styles[theme]} ${className}`}
            >
                {children}
            </Link>
            :
            <button
                onClick={clickHandler}
                type='button'
                className={`${styles.button} ${styles[theme]} ${className}`}
            >
                {children}
            </button>

    );
}