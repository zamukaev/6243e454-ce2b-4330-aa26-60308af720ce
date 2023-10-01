import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCartData } from '../../store/selectors/getCartDate';

import { Search } from '../Search/Search';

import { BsCart3 } from 'react-icons/bs';

import styles from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header: FC<HeaderProps> = (props) => {
    const { className } = props;
    const { counter } = useSelector(getCartData);

    return (
        <header className={styles.header}>
            <div className={styles.search}><Search /></div>
            <Link to='/cart' className={styles.cartContainer}>
                <BsCart3 className={styles.cartIcon} size={18} />
                {counter !== 0 && <span className={styles.cartCounter}>{counter}</span>}
            </Link>
        </header>
    );
}