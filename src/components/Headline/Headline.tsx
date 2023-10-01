import { FC, ReactNode } from 'react';

import styles from './Headline.module.scss';

export type HTagType = 'h1' | 'h2' | 'h3';

export enum Size {
    L = 'size_l',
    M = 'size_m',
    S = 'size_s'
}

interface HeadlineProps {
    className?: string;
    HTag?: HTagType;
    children?: ReactNode;
    size?: Size;
}

export const Headline: FC<HeadlineProps> = (props) => {
    const {
        className,
        HTag = 'h1',
        children,
        size = Size.M
    } = props;

    return (
        <HTag className={`${styles.headline} ${styles[size]} ${className}`}>
            {children}
        </HTag>
    );
}