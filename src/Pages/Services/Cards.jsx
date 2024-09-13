
import React, { useState, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
// Material UI
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import useTheme from "@mui/material/styles/useTheme";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
// Components
import Services from './Services';
// CSS
import "./Services.css";
// Backend API
import { API } from "../../config";

const Cards = () => {

    const theme = useTheme(); //Theme Global

    const [servicesSample, setServicesSample] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [cityFilter, setCityFilter] = useState('');
    const [cityOptions, setCityOptions] = useState([]);

    const images = {
        1: "/Home/carousel_backup_1.jpg",
        2: "/Home/carousel_backup_2.jpg",
        3: "/Home/carousel_backup_3.jpg",
        4: "/Home/carousel_backup_4.jpg",
        5: "/Home/carousel_backup_5.jpg",
    };

    useEffect(() => {
        fetchInitialData();
    }, []);

    const fetchInitialData = async () => {
        const API_URL = `${API}/vendors`
        // const API_URL = "https://gg-pac-team5-back-1.onrender.com/api/v1/vendors"

        // Local Host API
        // const API_URL = "http://localhost:8000/api/v1/vendors";
        try {
            const resp = await fetch(API_URL);
            const json = await resp.json();

            const uniqueCities = [...new Set(json.vendors.map(item => item.city))];
            setCityOptions(uniqueCities);
        } catch (err) {
            console.error("Failed to fetch data:", err);
        }
    };
    // Search Input
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter for Cities
    const handleCityFilterChange = (e) => {
        setCityFilter(e.target.value);
    };

    // Filter and search Data
    const handleSearchClick = async () => {
        setIsSearchClicked(true);
        await fetchData(searchQuery, cityFilter);
    };

    // Reset Search
    const handleReturnClick = () => {
        setIsSearchClicked(false); // Reset the search state
        setSearchQuery(''); // Clear the search query
        setCityFilter(''); // Clear the city filter
        window.location.reload(); // Reload the page to its original state
    };

    const fetchData = async (query = '', city = '') => {
        const API_URL = `${API}/vendors`
        // const API_URL = "https://gg-pac-team5-back-1.onrender.com/api/v1/vendors"

        // Local Host API
        // const API_URL = "http://localhost:8000/api/v1/vendors";
        try {
            const resp = await fetch(API_URL);
            const json = await resp.json();

            // Data Filtering using City name and Search button
            const filteredData = json.vendors.filter((item) => {
                const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
                const matchesCity = city ? item.city === city : true;
                return matchesQuery && matchesCity;
            });

            // Foramatted data with CITY Filter
            const formattedData = filteredData.map((item, index) => ({
                name: item.name || `Service ${index + 1}`,
                street: item.street,
                city: item.city || 'No Email Available',
                state: item.state,
                zip: item.zip,
                country: item.country,
                description: item.profile.description,
                email: item.email,
                phone: item.phone,
                image: item.img ? item.img : images[Math.floor(Math.random() * 5) + 1],
            }));

            setServicesSample(formattedData);
        } catch (err) {
            alert("Failed to fetch data:", err);
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

            {/* Header Section */}
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

            {/* Filter and Search Section */}
            <Container>
                {!isSearchClicked && (
                    <Container>
                        <Box
                            sx={{
                                textAlign: "center",
                                width: '100%',
                            }}>
                            <Typography>Give yourself a little pampering</Typography><br />
                            <Typography>Relax, sit back... We promise your best look!!</Typography><br />
                            <Typography>Explore our beauty services...</Typography><br />
                        </Box>
                        <Box
                            sx={{
                                marginBottom: '1rem',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Select
                                value={cityFilter}
                                onChange={handleCityFilterChange}
                                displayEmpty
                                sx={{
                                    marginBottom: '1rem',
                                    width: '50%',
                                }}>
                                <MenuItem value="">All Cities</MenuItem>
                                {cityOptions.map((city, index) => (
                                    <MenuItem key={index} value={city}>{city}</MenuItem>
                                ))}
                            </Select>
                            <Box
                                sx={{
                                    width: "50%",
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
                            </Box><br /><br />
                        </Box>
                    </Container>
                )}
            </Container>

            {/* Results Section */}
            {isSearchClicked && (
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: 0.5
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
                                    description={service.description}
                                    email={service.email}
                                    phone={service.phone}
                                />
                            </Box>
                        ))}
                    </Box>
                    <CardActions
                        sx={{
                            textAlign: "center",
                            my: 2,
                            display: "block",
                            color: "text.primary",
                        }}>
                        <Button
                            size="small"
                            onClick={handleReturnClick}
                            variant="outlined"
                            color="secondary" >Return to Services
                        </Button>
                    </CardActions>
                </Container>

            )}
            <br />
        </Container>
    );
};
export default Cards;