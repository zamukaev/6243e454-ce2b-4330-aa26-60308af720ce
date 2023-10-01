import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { HiOutlinePlus } from 'react-icons/hi';
import { BiSolidLocationPlus } from 'react-icons/bi';
import { FaMinus } from 'react-icons/fa';

import { useAppDispatch } from '../../../store/hooks/useAppDispatch';
import { eventActions } from '../../../store/slices/eventSlice';
import { cartActions } from '../../../store/slices/cartSlice';
import { EventData } from '../../../store/types/EventSchema';

import { useDateWithLocaleString } from '../../../utils/useDateWithLocaleString';

import { Headline, Size } from '../../Headline/Headline';
import { Button, ButtonTheme } from '../../Botton/Button';
import { Text, TextTheme } from '../../Text/Text';

import styles from './CardItem.module.scss';

interface CardItemProps {
    className?: string;
    event: EventData;
}

export const CardItem: FC<CardItemProps> = (props) => {
    const { className, event } = props;
    const dispatch = useAppDispatch();
    const startTime = useDateWithLocaleString(event!.startTime);
    const endTime = useDateWithLocaleString(event!.endTime);

    const { pathname } = useLocation();

    const addEventToCartHandler = () => {
        if (event) {
            dispatch(cartActions.setCartData(event))
            dispatch(eventActions.removeEvent({ id: event!._id, data: event!.date }))
        }
    }

    const removeCartFromCartHandler = () => {
        dispatch(cartActions.removeCart(event));
    }
    return (
        <li className={styles.cardItem}>
            <div className={styles.header}>
                <div className={styles.avatar}></div>
                <Headline
                    HTag='h3'
                    size={Size.S}
                    className={styles.title}
                >
                    {event?.title}
                </Headline>
            </div>
            <div className={styles.body}>
                <img className={styles.image} src={event?.flyerFront} alt="" />
            </div>
            <div className={styles.footer}>
                <a className={styles.link} href={event?.venue.direction} target='_blank'>
                    <BiSolidLocationPlus size="23px" className={styles.location} />
                    {event?.venue.name}
                </a>
                <div className={styles.eventDate}>
                    <Text
                        theme={TextTheme.SECONDARY}
                    >
                        <span
                            className={styles.time}
                        >
                            I Starts:
                        </span>
                        {startTime}
                    </Text>
                    <Text
                        theme={TextTheme.SECONDARY}
                    >
                        <span
                            className={styles.time}
                        >
                            I Ends:
                        </span>
                        {endTime}
                    </Text>
                </div>
                {pathname !== '/cart' ?
                    <Button
                        onClick={addEventToCartHandler}
                        theme={ButtonTheme.ROUND}
                        className={styles.btn}
                    >
                        <HiOutlinePlus size="23px" />
                    </Button>
                    : <Button
                        onClick={removeCartFromCartHandler}
                        theme={ButtonTheme.ROUND_RED}
                        className={styles.btnRed}
                    >
                        <FaMinus size="23px" />
                    </Button>
                }
            </div>
        </li>
    );
}