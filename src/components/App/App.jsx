// import s from './App.module.css'
import { Routes, Route, Navigate} from 'react-router-dom';
// import Container from 'components/Container/Container';
import Container from '@mui/material/Container';
import Appbar from 'components/AppBar/AppBar';
import HomePage from 'pages/Home page/HomePage';
import RegisterPage from 'pages/Register page/RegisterPage';
import LoginPage from 'pages/Login page/LoginPage';
import PhonebookPage from 'pages/Phonebook page/PhonebookPage';
import { useEffect, Suspense  } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import LinearProgress from '@mui/material/LinearProgress';

export const App = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const isFetchingCurrentUser = (authSelectors.getIsFetchingCurrentUser)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch])
 
    return (
        isFetchingCurrentUser && (
            <Suspense fallback={<LinearProgress/>}>
            <Container fixed>
                <Appbar/>
                <Routes>
                    <Route index path="/" element={isLoggedIn ? <Navigate to="/contacts"/> :<HomePage/>} />
                    <Route path="/register" element={isLoggedIn ? <Navigate to="/contacts"/> : <RegisterPage/>} />
                    <Route path="/login" element={isLoggedIn ? <Navigate to="/contacts"/> :<LoginPage/>} />
                    <Route path="/contacts" element={isLoggedIn ? <PhonebookPage/> : <Navigate to="/"/>} />
                </Routes>
            </Container>
            </Suspense>

        )
        
    )

}

