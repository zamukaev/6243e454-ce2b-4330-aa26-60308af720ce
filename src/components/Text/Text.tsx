import { FC, ReactNode } from 'react';

import styles from './Text.module.scss';

export enum Size {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

export enum TextTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface TextProps {
    className?: string;
    children?: ReactNode;
    theme: TextTheme;
    size?: Size,
}

export const Text: FC<TextProps> = (props) => {
    const {
        theme = TextTheme.PRIMARY,
        className,
        children,
        size = Size.M
    } = props;

    return <p
        className={`
        ${styles.text} 
        ${className} 
        ${styles[theme]} 
         ${styles[size]}`
        }
    >
        {children}
    </p>;
}