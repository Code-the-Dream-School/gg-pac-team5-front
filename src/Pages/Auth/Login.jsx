import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');

        try {
            const success = await onLogin(email, password);
            if (!success) {
                setError('Invalid email or password. Please try again.');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <Container component="main" maxWidth="xs" >
            <Box component="form" onSubmit={handleSubmit} 
                sx={{   
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: 'auto',
                    padding: '2em' 
                }}>
                <Typography> Please login below. </Typography>

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <Typography color="error">{error}</Typography>}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
                    Sign In
                </Button>
            </Box>
        </Container>
    );
};

export default Login;
