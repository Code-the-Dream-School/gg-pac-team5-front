import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Services from './Services';
import { FaSearch } from "react-icons/fa";
import "./Services.css";
import Box from '@mui/material/Box';

const Cards = () => {
    const [servicesSample, setServicesSample] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchClick = async () => {
        // Trigger the fetch with the current searchQuery
        await fetchData(searchQuery);
    };

    const fetchData = async (query) => {
        // const API_URL = 'https://api.sampleapis.com/cartoons/cartoons2D';
        const API_URL = "http://localhost:8000/api/v1/vendors"
        try {
            const resp = await fetch(API_URL);
            const json = await resp.json();

            const filteredData = json.vendors.filter((item) => {
                return item.name.toLowerCase().includes(query.toLowerCase());
            });

            const formattedData = filteredData.map((item, index) => ({
                name: item.name || `Service ${index + 1}`,
                street: item.street,
                city: item.city || 'No Email Available',
                state: item.state,
                zip: item.zip,
                country: item.country,
                image: item.image || 'https://via.placeholder.com/140', // Placeholder image
                Newroute: `/pages/${item.name}`
            }));

            setServicesSample(formattedData);
        } catch (err) {
            console.error("Failed to fetch data:", err);
        }
    };

    return (
        <div>
            <h1>Give yourself a little pampering</h1><br />
            <h3>Relax, sit back... We promise your best look!!</h3><br />

            <h1>Explore our beauty services...</h1><br />
            <div className="searchbar-input-wrapper">
                <FaSearch id="search-icon" />
                <input
                    placeholder="Type to search..."
                    onChange={handleSearchInputChange}
                />
                <Button variant="contained" size="medium" onClick={handleSearchClick}>
                    Search
                </Button>
            </div>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
                {servicesSample.map((service, index) => (
                    <Box key={index} sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(25% - 16px)' }, m: 1 }}>
                        <Services
                            name={service.name}
                            image={service.image}
                            street={service.street}
                            city={service.city}
                            state={service.state}
                            zip={service.zip}
                            country={service.country}
                            Newroute={service.Newroute}
                        />
                    </Box>
                ))}
            </Box>
            <br />
            <Button component={Link} to="/" variant="contained" color="primary" className="button wide tall luxury">
                Return to home page
            </Button>
        </div>
    );
};

export default Cards;
