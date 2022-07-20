import { FC, memo } from "react";

import { useAppSelector } from "../../hooks/redux";

import { IData } from "../../types/types";

import EventsItem from "../EventsItem/EventsItem";

import styles from './Events.module.scss';

interface EventsProps {
	events: IData[];
}

const Events: FC<EventsProps> = ({ events }) => {
	let date;

	const { searchValue } = useAppSelector(state => state.filter);
	const filteredEvents = events.filter((event: IData) => event.title.toLowerCase().includes(searchValue.toLowerCase()));

	if (filteredEvents[0].flyerFront) {
		date = new Date(filteredEvents[0].date).toString().split(' ', 4).join(' ');
	}

	return (
		<div className={styles.content}>
			<h3 className={styles.title}>{date && date}</h3>
			<div className={styles.events}>
				{filteredEvents.filter((event: IData) => event.flyerFront).map((event: IData) =>
					<EventsItem
						key={event._id}
						_id={event._id}
						title={event.title}
						flyerFront={event.flyerFront}
						startTime={event.startTime}
						endTime={event.endTime} venue={event.venue}
					/>
				)}
			</div>
		</div>
	);
}
export default Events;
