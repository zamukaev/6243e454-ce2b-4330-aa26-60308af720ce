import { FC, memo } from 'react'
import { useSelector } from 'react-redux';

import { getCartData } from '../../store/selectors/getCartDate';

import { BsArrowLeft } from 'react-icons/bs'

import { Headline, Size } from '../../components/Headline/Headline';
import { Card } from '../../components/Card/Card';
import { Text } from '../../components/Text/Text';
import { Button, ButtonTheme } from '../../components/Botton/Button';
import { TextTheme } from '../../components/Text/Text';

import styles from './Cart.module.scss';

interface CartProps {
    className?: string;
}

const Cart: FC<CartProps> = (props) => {
    const { className } = props;
    const { cart } = useSelector(getCartData);

    return (
        <section className={styles.cart}>
            <Headline HTag='h1' size={Size.L} className={styles.title}>My Events</Headline>
            <Button
                className={styles.toHomeBtn}
                link theme={ButtonTheme.CLEAR}
                href='/'
            >
                <BsArrowLeft
                    className={styles.arrow}
                    size={38}
                />
            </Button>
            {cart?.length !== 0
                ?
                <Card events={cart} />
                :
                <div className={styles.empty}>
                    <Text
                        size={Size.L}
                        theme={TextTheme.PRIMARY}
                        className={styles.text}
                    >
                        You don't have any events yet
                    </Text>

                </div>
            }
        </section>
    );
};

export default Cart;