import { FC } from "react";
import { Routes, Route } from 'react-router-dom';

import Cart from '../component/Cart/Cart';
import Main from "../component/Main/Main";
import Layout from "../component/Layout/Layout";

const Router: FC = () => {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Layout>
	);
}
export default Router;