import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Login from './Login';
// import { NavBar } from '../../Layouts/Header/NavBar/NavBar.tsx';

const Auth_Layout = ({ isAuthenticated, setIsAuthenticated }) => {
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        if (email === 'aaa@aaa.aaa' && password === 'A!1aaaaa') {
            setIsAuthenticated(true);
            navigate('/profile');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    };

    return (
        <>
            {/* <NavBar isAuthenticated={isAuthenticated} /> NavBar displaying twice, commented this line out to prevent duplicate*/}
            {isAuthenticated ? (
                <Outlet />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </>
    );

export { Auth_Layout };
