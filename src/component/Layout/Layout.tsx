import { FC } from "react";

import Header from "../Header/Header";

import styled from 'styled-components';

const StyledLayout = styled.div`
max-width:1200px;
margin:0px auto;
`


interface LayoutProps {
	children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<StyledLayout>
			<Header />
			{children}
		</StyledLayout>
	);
}

export default Layout;