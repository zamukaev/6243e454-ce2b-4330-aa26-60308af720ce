import { useEffect } from 'react';

import { useAppDispatch } from './store/hooks/useAppDispatch';
import { fetchEvent } from './store/services/fetchEvents';
import { cartActions } from './store/slices/cartSlice';
import AppRouter from './providers/router/ui/AppRouter';

import { Header } from './components/Header/Header';

import './App.css'

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEvent());
        dispatch(cartActions.initCart());
    }, []);

    return (
        <div className='app'>
            <Header />
            <AppRouter />
        </div>
    )
}

export default App
