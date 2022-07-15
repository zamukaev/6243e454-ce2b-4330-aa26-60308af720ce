import { FC } from "react";
import { Link } from "react-router-dom";

import BasicButtons from "../ui/Buttons/BasicButtons";

import styles from './Cart.module.scss';

const CartEmpty: FC = () => {
	return (
		<div className={styles.empty}>
			<h2 className={styles.text}>You have no added events, please select events!!!</h2>
			<Link to="/" className={styles.backBtn}>
				<BasicButtons>
					back to Home
				</BasicButtons>
			</Link>
		</div>
	);
}
export default CartEmpty;