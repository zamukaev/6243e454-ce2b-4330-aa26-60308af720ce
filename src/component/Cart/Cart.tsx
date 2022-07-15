import { FC, memo } from "react";
import { Link } from "react-router-dom";

import EventsItem from "../EventsItem/EventsItem";
import BasicButtons from "../ui/Buttons/BasicButtons";
import CartEmpty from "./CartEmpty";

import { useAppSelector } from "../../hooks/redux";

import CancelIcon from '@mui/icons-material/Cancel';

import styles from './Cart.module.scss';

const Cart: FC = () => {
	const { cart } = useAppSelector(state => state.cart);
	return (
		<div className={styles.content}>
			<h1 className={styles.title}> My Events</h1>
			<div className={styles.cartItem}>
				{cart.length !== 0 ? cart.map(cart => <EventsItem
					key={cart._id}
					_id={cart._id}
					flyerFront={cart.flyerFront}
					title={cart.title}
					endTime={cart.endTime}
					startTime={cart.startTime}
					venue={cart.venue}
				/>) :
					<CartEmpty />
				}
			</div>
			{cart.length !== 0 && <Link to="/">
				<BasicButtons>
					<CancelIcon />
					<span className={styles.text} >close cart</span>
				</BasicButtons>
			</Link>}
		</div>
	);
}
export default memo(Cart);