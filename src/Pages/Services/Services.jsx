import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Cards from './Cards';

const Services = () => {
    return (
        <div>
            <h1 >Find Services</h1>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    border: 1,
                    m: 2
                }}
            >
                <TextField fullWidth label="Serach Service by Name" id="fullWidth" size="small" />
            </Box>
            <Cards />
            <Link to="/">
                <button type="submit" className="button wide tall luxury">
                    Return to home page
                </button>
            </Link>
        </div>
    );
}

export default Services;
