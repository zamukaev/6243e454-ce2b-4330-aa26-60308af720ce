import { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import Cart from '../component/Cart/Cart';
import Main from "../component/Main/Main";
import Layout from "../component/Layout/Layout";
import Header from "../component/Header/Header";

const Router: FC = () => {
	return (
		<Layout>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Layout>
	);
}
export default Router;