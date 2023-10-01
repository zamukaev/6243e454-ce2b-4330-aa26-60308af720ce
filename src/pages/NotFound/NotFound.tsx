import { FC } from 'react';
import { Headline } from '../../components/Headline/Headline';
import { Size } from '../../components/Text/Text';

import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props;

    return (
        <section className={styles.notFound}>
            <Headline HTag='h1' size={Size.L}>404 Not Found</Headline>
        </section>
    );
}
export default NotFound;