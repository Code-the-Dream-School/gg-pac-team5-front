import React from 'react';
import { Link } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import Services from './Services';
// import Image1 from '../../Assets/Services/salon-service-1.jpg'
import { FaSearch } from "react-icons/fa";
import "./Services.css";
import FetchAPI from './FetchAPI';
import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// const ServicesSample = [
//     {
//         title: 'Service 1',
//         details: 'aaaa aaaaa aaaaaaa aaaaaaa aaaaa aaaaaaaaaa aaaa aa aaaaa aa',
//         image: Image1,
//         Newroute: '/pages/Service_1'
//     },
//     {
//         title: 'Service 2',
//         details: 'bbbb bbbb bbbbb bbbbb bbbb bbbbb ',
//         image: Image1,
//         Newroute: '/pages/Service_2'
//     },
//     {
//         title: 'Service 3',
//         details: 'cccc ccccc cccc cc ccccc cc ccc ccc ccc cccccc ccc',
//         image: Image1,
//         Newroute: '/pages/Service_3'
//     }
// ]

const onSearchClick = () => alert('Finding Vendors');

const Cards = () => {
    const [servicesSample, setServicesSample] = useState([]);
    return (
        <div>
            <h1>Give yourself a little pampering </h1><br />
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
                // value={input}
                // onChange={(e) => handleChange(e.target.value)}
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
}
export default Cards;