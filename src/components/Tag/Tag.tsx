import { FC, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from './Tag.module.scss';

export enum TagTheme {
    OUTLINE = 'outline',
}

export enum Size {
    S = 's',
    M = 'm',
}
export interface TagProps {
    className?: string,
    children?: ReactNode;
    size?: Size
    href?: string;
    theme?: TagTheme;
}

export const Tag: FC<TagProps> = (props) => {
    const {
        children,
        size = Size.S,
        href,
        theme = TagTheme.OUTLINE,
        className,
    } = props;

    return (
        <div
            className={`
            ${styles.tag} 
            ${className} 
            ${styles[theme]} 
             ${styles[size]}`
            }
            {...props}
        >
            {href ? <a href={href}>{children}</a> : children}
        </div>
    );
};
