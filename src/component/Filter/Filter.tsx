import React, { FC, useState } from "react";

import { filterEventsAC } from "../../store/action-creator/filterEvents";
import { useAppDispatch } from "../../hooks/redux";

import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styles from './Filter.module.scss';

const Filter: FC = () => {

	const [value, setValue] = useState<string>('');
	const [active, setActive] = useState<boolean>(false);

	const dispatch = useAppDispatch();

	const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		dispatch(filterEventsAC(value))
	}

	return (
		<div className={styles.filter}>
			<div className={styles.input} onFocus={() => setActive(true)} onBlur={() => setActive(false)}>
				{!active && <div className={styles.search} >
					<span className={styles.searchItem}><SearchOutlinedIcon htmlColor="white" /></span>
					<span className={styles.searchText}>Search...</span>
				</div>}
				<input onChange={onChangeHandler} type="text" value={value} />
			</div>
			<span className={styles.filterItem}><FilterAltOutlinedIcon htmlColor="white" /></span>
		</div>
	);
}
export default Filter;