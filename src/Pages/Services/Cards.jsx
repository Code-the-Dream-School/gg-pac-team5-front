import { Link } from 'react-router-dom';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Services from './Services';
import { FaSearch } from "react-icons/fa";
import "./Services.css";
import FetchAPI from './FetchAPI';
import { useState } from 'react'
import Box from '@mui/material/Box';

const onSearchClick = () => alert('Finding Vendors');

const Cards = () => {
    const [servicesSample, setServicesSample] = useState([]);
    return (
        <div>
            <h1>Give yourself a little pampering</h1><br />
            <h3>Relax, sit back... We promise your best look!!</h3><br />

            <h1>Explore our beauty services...</h1><br />
            <FormControl>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Nail Pampering" />
                    <FormControlLabel value="male" control={<Radio />} label="Tail Pampering" />
                    <FormControlLabel value="other" control={<Radio />} label="Both" />
                </RadioGroup>
            </FormControl><br />
            <div className="searchbar-input-wrapper">
                <FaSearch id="search-icon" />
                <input
                    placeholder="Type to search..."
                />
                <Button variant="contained" size="medium" onClick={onSearchClick} >
                    Search
                </Button>
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {servicesSample.map((service, index) => (
                    <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' }, m: 1 }}>
                        <Services
                            title={service.title}
                            image={service.image}
                            details={service.details}
                            Newroute={service.Newroute}
                        />
                    </Box>
                ))}
            </Box>
            <FetchAPI setServicesSample={setServicesSample} />
            <Button component={Link} to="/" variant="contained" color="primary" className="button wide tall luxury">
                Return to home page
            </Button>

        </div>
    );
};
export default Cards;