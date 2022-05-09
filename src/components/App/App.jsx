
import { Routes, Route, Navigate} from 'react-router-dom';
import Container from '@mui/material/Container';
import Appbar from 'components/AppBar/AppBar';
import { useEffect, Suspense, lazy  } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const HomePage = lazy(() => import('pages/Home page/HomePage'))
const RegisterPage = lazy(() => import('pages/Register page/RegisterPage'))
const LoginPage = lazy(() => import('pages/Login page/LoginPage'))
const PhonebookPage = lazy(() => import('pages/Phonebook page/PhonebookPage'))


export const App = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const isFetchingCurrentUser = (authSelectors.getIsFetchingCurrentUser)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authOperations.fetchCurrentUser())
    }, [dispatch])
 
    return (
        isFetchingCurrentUser && (
           <Suspense fallback={ <Box sx={{ display: 'flex', alignItems: 'center',
           justifyContent: 'center',top: 0,
           left: 0,
           bottom: 0,
           right: 0,
           position: 'absolute', }}><CircularProgress/></Box>}>
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

