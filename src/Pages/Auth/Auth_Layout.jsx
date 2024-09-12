import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import Login from './Login';

export const Auth_Layout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
            setIsAuthenticated(storedAuth === 'true');    
        }, []);

    const handleLogin = (email, password) => {
        console.log('Login attempt with email:', email, 'and password:', password); 
        if (email === 'aaa@aaa.aaa' && password === 'A!1aaaaa') {
            setIsAuthenticated(true);
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/profile');
            return true;
        } else {
            return false;
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
        navigate('/auth');
    };

    return (
        <>
            {isAuthenticated ? (
                <>
                    <Outlet />
                    <div style ={{ 
                        flex: 1,  
                        display: 'flex', 
                        padding: '1em'
                        }}>
                    <Button 
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                    </div>
                </>
                ) : (
                    <Login onLogin={handleLogin} />
            )}
        </>
    );
};

export default Auth_Layout;