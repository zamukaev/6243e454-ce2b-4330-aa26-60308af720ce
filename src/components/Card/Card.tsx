import { FC } from 'react';
import { useSelector } from 'react-redux';

import { EventData } from '../../store/types/EventSchema';
import { getInputValue } from '../../store/selectors/getInputValue';

import { useDateWithDateString } from '../../utils/useDateWithDateString';

import { Headline } from '../Headline/Headline';
import { CardItem } from './CardItem/CardItem';

import styles from './Card.module.scss';

interface CardProps {
    className?: string;
    events?: EventData[];
    title?: string;
}

export const Card: FC<CardProps> = (props) => {
    const {
        className,
        events,
        title
    } = props;
    const eventDate = useDateWithDateString(title);
    const { value } = useSelector(getInputValue);

    let eventListToDisplay = events;

    const renderEventList = () => {
        return eventListToDisplay?.map(event => (
            <CardItem
                key={event._id}
                event={event}
                className={className} />
        ));
    }
    if (value) {
        eventListToDisplay = events?.filter((event) => (
            event.title.toLowerCase().includes(value?.toLowerCase())
        ));
    }

    return (
        <section className={styles.content} >
            {eventListToDisplay?.length !== 0 &&
                <Headline
                    className={styles.title}
                    HTag='h2'
                >
                    {eventDate}
                </Headline>}
            <ul className={styles.card}>
                {renderEventList()}
            </ul>
        </section>
    );
}