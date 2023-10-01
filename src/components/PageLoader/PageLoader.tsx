import { FC } from 'react'

import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <section className={styles.pageLoader}>
            <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
        </section>
    );
}