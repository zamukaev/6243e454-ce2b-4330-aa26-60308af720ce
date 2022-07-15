import Button from '@mui/material/Button';
import { FC } from 'react';

interface IBasicButtonsProps {
	children: React.ReactNode;
}

const BasicButtons: FC<IBasicButtonsProps> = ({ children }) => {
	return (<Button variant="contained" > {children}</Button>);
}

export default BasicButtons;