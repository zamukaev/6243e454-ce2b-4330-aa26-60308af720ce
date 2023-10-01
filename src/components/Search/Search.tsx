import { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../store/hooks/useAppDispatch';
import { searchActions } from '../../store/slices/searchSlice';
import { getInputValue } from '../../store/selectors/getInputValue';

import { Input } from '../Input/Input';

import styles from './Search.module.scss';

interface SearchProps {
    className?: string;
}

export const Search: FC<SearchProps> = (props) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const [isFocus, setIsFocus] = useState(false);
    const { value } = useSelector(getInputValue);

    const searchHandler = (inputValue: string) => {
        dispatch(searchActions.setInputValue(inputValue));
    }

    const setFocusHandler = () => {
        if (!value) {
            setIsFocus(!isFocus);
        }
    }
    const clearInputHandler = () => {
        dispatch(searchActions.setInputValue(''));
        setIsFocus(!isFocus);
    }

    return (
        <Input
            className={styles.search}
            onChange={searchHandler}
            type='text'
            onFocus={setFocusHandler}
            onBlur={setFocusHandler}
            isFocus={isFocus}
            value={value}
            onClear={clearInputHandler}
        />);
}