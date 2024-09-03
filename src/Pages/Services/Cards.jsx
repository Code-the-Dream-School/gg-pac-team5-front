// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Services from './Services';
import { FaSearch } from "react-icons/fa";
import useTheme from "@mui/material/styles/useTheme";
import "./Services.css";
import Box from '@mui/material/Box';

const Cards = () => {
    const theme = useTheme();
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
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                display: "flex",
                minHeight: '100vh',
                flexFlow: "column",
                height: "100vh",
                width: "100vw",
                padding: 0,
                justifyContent: "space-between",
                background: theme.palette.primary.gradientBackgroundBack,
            }}>
            <Box
                sx={{
                    paddingTop: {
                        xs: 0,
                        md: `${theme.customVariables.appBarMinHeight}vh`,
                    },
                    display: "flex",
                    flexFlow: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "primary.main",
                    minHeight: { xs: "20%", md: "30%" },
                }}
            >
                <Typography variant="h2">Pychee</Typography>
                <Typography variant="h2">Leachy</Typography>
            </Box>
            <br />
            <Box
                sx={{
                    textAlign: "center",
                    width: '100%'
                }}>
                <Typography >Give yourself a little pampering</Typography><br />
                <Typography >Relax, sit back... We promise your best look!!</Typography><br />
                <Typography >Explore our beauty services...</Typography><br />
            </Box>
            <Box
                sx={{
                    width: "50%",
                    margin: '0 auto',
                    height: '2.5rem',
                    border: 'none',
                    borderRadius: '10px',
                    padding: '0 0 0 25px',
                    boxShadow: '0px 0px 8px ',
                    backgroundColor: 'white',
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <FaSearch id="search-icon" />
                <input

                    placeholder="Search Services..."
                    onChange={handleSearchInputChange}
                />
                <Button variant="contained" size="medium" onClick={handleSearchClick}>
                    Search
                </Button>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 2
                }}>
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
            {/* <Button component={Link} to="/" variant="contained" color="primary" className="button tall luxury">
                Return to home page
            </Button> */}
        </Container >
    );
};

export default Cards;
