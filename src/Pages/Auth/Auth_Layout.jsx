// Auth_Layout.jsx
import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Login from './Login';

export const Auth_Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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
            {isAuthenticated ? (
                <Outlet />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </>
    );
};