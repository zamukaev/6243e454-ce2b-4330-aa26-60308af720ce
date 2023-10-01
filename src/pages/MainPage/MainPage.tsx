import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getEventData } from '../../store/selectors/getEventData';

import { Card } from '../../components/Card/Card';
import { Headline, Size } from '../../components/Headline/Headline';

import styles from './MainPage.module.scss';
import { PageLoader } from '../../components/PageLoader/PageLoader';

interface MainPageProps {
    className?: string;
}
const MainPage: FC<MainPageProps> = () => {
    const { events, isLoading, error } = useSelector(getEventData);

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
        <div className={styles.mainPage}>
            <Headline className={styles.title} HTag='h1' size={Size.L}>Public Events</Headline>
            {events && Object.keys(events).map(keyItem => (
                <Card key={keyItem} title={keyItem} events={events[keyItem]} />
            ))}
        </div>
    );
}
export default MainPage;