import { FC } from "react";

import photo from '../../assets/image/01.jpg';

import { IVenue } from "../../types/types";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addCartAC, removeCartAC } from "../../store/action-creator/toggleCartAC";

import styles from './EventsItem.module.scss';

interface EventsItemProps {
	_id: string;
	title: string;
	flyerFront: string;
	venue: IVenue;
	startTime: string;
	endTime: string;
}
const EventsItem: FC<EventsItemProps> = ({ _id, title, flyerFront, venue, startTime, endTime }) => {
	const startDate = new Date(startTime).toString().split(' ', 5).join(' ');
	const endDate = new Date(endTime).toString().split(' ', 5).join(' ');
	const dispatch = useAppDispatch();
	const { cart, count } = useAppSelector(state => state.cart);

	const addCartHandler = () => {
		dispatch(addCartAC({ _id, title, flyerFront, venue, startTime, endTime }))
	}

	const removeCart = () => {
		dispatch(removeCartAC(_id))
	}

	return (
		<div className={styles.eventItem}>
			<div className={styles.header}>
				<div className={styles.photo}><img src={photo} alt="" /></div>
				<h3 className={styles.subtitle}>{title}</h3>
			</div>
			<div className={styles.img}><img src={flyerFront} alt="" /></div>
			<div className={styles.footer}>
				<div className={styles.location}>
					<a href={venue.direction} target="blank"><span><LocationOnIcon color="primary" /></span>{venue.name}</a>
				</div>
				<div className={styles.date}>
					<span className={styles.start}> I Starts: {startDate}</span>
					<span className={styles.end}> I Starts: {endDate}</span>
				</div>
				<div className={styles.toggleBtn}>{!cart.some(item => item._id === _id) ? <AddCircleIcon onClick={addCartHandler} color="primary" /> : <RemoveCircleIcon onClick={removeCart} color="primary" />}</div>
			</div>

		</div>
	);
}
export default EventsItem;