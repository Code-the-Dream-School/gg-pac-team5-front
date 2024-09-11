// Login.jsx
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';
import PropTypes from 'prop-types';

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
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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

Login.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default Login;
