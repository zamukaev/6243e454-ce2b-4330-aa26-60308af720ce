import { FC, useEffect } from "react";

import Events from "../Events/Events";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchEvents } from "../../store/action-creator/fetchEvents";

import { IData } from "../../types/types";

import styles from './Main.module.scss';

const Main: FC = () => {
	const dispatch = useAppDispatch();
	const { data, error, isLoading } = useAppSelector(state => state.events);

	let eventsArray: any = [];
	let newData: string[] = data.reduce((accum: string[], item: IData): any => {
		if (item.date) {
			accum.push(item.date);
		}
		return accum
	}, []);

	const setData = new Set(newData);

	setData.forEach(item => {
		let newArr: any[] = [];
		for (let j = 0; j < data.length; j++) {
			if (item === data[j].date) {
				newArr.push(data[j])
			}
		}
		eventsArray.push(newArr);
	})

	useEffect(() => {
		dispatch(fetchEvents())
	}, [])

	if (isLoading) {
		return <h1>Loading....</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div className={styles.contant}>
					<div className={styles.eventBlock}>
						<h1 className={styles.title}>Public Events</h1>
						{eventsArray.map((events: IData[], index: number) => <Events key={index} events={events} />)}
					</div>
				</div>

			</div>
		</div>
	);
}

export default Main;