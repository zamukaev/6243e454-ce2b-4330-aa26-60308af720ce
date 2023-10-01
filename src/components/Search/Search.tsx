import { FC, useCallback, useState } from 'react';
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

    const searchHandler = useCallback((inputValue: string) => {
        dispatch(searchActions.setInputValue(inputValue));
    }, [dispatch])

    const setFocusHandler = useCallback(() => {
        if (!value) {
            setIsFocus(!isFocus);
        }
    }, [isFocus, value])
    const clearInputHandler = useCallback(() => {
        dispatch(searchActions.setInputValue(''));
        setIsFocus(!isFocus);
    }, [dispatch, isFocus])

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