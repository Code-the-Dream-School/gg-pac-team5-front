import React, { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Login from './Login';

export const Auth_Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        console.log('Login attempt with email:', email, 'and password:', password); 
        if (email === 'aaa@aaa.aaa' && password === 'A!1aaaaa') {
            setIsAuthenticated(true);
            navigate('/profile');
            return true;
        
        } else {
            return false;
        }
    };

    return (
        <>
            {isAuthenticated ? (
                <Outlet />
            )  :  (
                <Login onLogin={handleLogin} />  
            )}
        </>
    );
};

export default Auth_Layout;