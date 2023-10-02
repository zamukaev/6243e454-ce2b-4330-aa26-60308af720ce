import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getEventData } from '../../store/selectors/getEventData';

import { Card } from '../../components/Card/Card';
import { Headline, Size } from '../../components/Headline/Headline';

import styles from './MainPage.module.scss';
import { PageLoader } from '../../components/PageLoader/PageLoader';
import { Tag, TagTheme } from '../../components/Tag/Tag';
import { useMinMaxDate } from '../../utils/useMinMaxDate';

interface MainPageProps {
    className?: string;
}
const MainPage: FC<MainPageProps> = () => {
    const { events, isLoading, error } = useSelector(getEventData);

    const date = events && Object.keys(events);
    const starDate = useMinMaxDate(date, true);
    const endDate = useMinMaxDate(date);

    if (error) {
        return (
            <div className={styles.mainPage}>
                <h1>{error}</h1>
            </div>
        );
    }

    if (isLoading) {
        return (<PageLoader />);
    }

    return (
        <section className={styles.mainPage}>
            <div className={styles.tags}>
                <Tag theme={TagTheme.OUTLINE} >
                    <img className={styles.icon}
                        src="https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg"
                        alt="United-kingdom flag" />
                    LONDON
                </Tag>

                <Tag>{starDate}- {endDate}</Tag>
            </div>
            <Headline className={styles.title} HTag='h1' size={Size.L}>Public Events</Headline>
            {events && Object.keys(events).map(keyItem => (
                <Card key={keyItem} title={keyItem} events={events[keyItem]} />
            ))}
        </section>
    );
}
export default MainPage;