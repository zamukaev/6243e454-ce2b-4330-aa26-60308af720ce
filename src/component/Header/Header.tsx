import { FC } from "react";
import { Link } from "react-router-dom";

import Filter from "../Filter/Filter";

import { useAppSelector } from "../../hooks/redux";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from './Header.module.scss';
import styled from "styled-components";


const StyledHeader = styled.header`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 100%;
	background: #1976d2;
	box-shadow: 0px 2px 2px 3px #1976d2;
	z-index:50;
`
const Container = styled.div`
		padding: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
`
const StyledLinktoCart = styled.div`
a{
position: relative;
span{
		color: #ffff;
		background: red;
		padding: 2px 5px;
		border-radius: 50%;
		position: absolute;
		top: -9px;
		right: -8px;
}
}

`

const Header: FC = () => {
	const { count } = useAppSelector(state => state.cart);

	return (
		<StyledHeader>
			<Container>
				<Filter />
				<StyledLinktoCart>
					<Link to="/cart" className={styles.cart}>
						<ShoppingCartOutlinedIcon htmlColor="white" />
						{count ? <span>{count}</span> : ''}
					</Link>
				</StyledLinktoCart>
			</Container>
		</StyledHeader>
	);
}

export default Header;