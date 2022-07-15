import { FC, useState } from "react";
import { Link } from "react-router-dom";

import Filter from "../Filter/Filter";

import { useAppSelector } from "../../hooks/redux";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from './Header.module.scss';

const Header: FC = () => {
	const { count } = useAppSelector(state => state.cart);

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Filter />
				<Link to="/cart" className={styles.cart}>
					<ShoppingCartOutlinedIcon htmlColor="white" />
					{count ? <span>{count}</span> : ''}
				</Link>
			</div>
		</header>
	);
}

export default Header;