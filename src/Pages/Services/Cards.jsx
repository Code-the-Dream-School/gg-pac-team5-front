
import { Link } from 'react-router-dom';
import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import Services from './Services';
import Image1 from '../../Assets/Services/salon-service-1.jpg';
import { FaSearch } from "react-icons/fa";
import "./Services.css";

const ServicesSample = [
    {
        title: 'Service 1',
        details: 'aaaa aaaaa aaaaaaa aaaaaaa aaaaa aaaaaaaaaa aaaa aa aaaaa aa',
        image: Image1,
        Newroute: '/pages/Service_1'
    },
    {
        title: 'Service 2',
        details: 'bbbb bbbb bbbbb bbbbb bbbb bbbbb ',
        image: Image1,
        Newroute: '/pages/Service_2'
    },
    {
        title: 'Service 3',
        details: 'cccc ccccc cccc cc ccccc cc ccc ccc ccc cccccc ccc',
        image: Image1,
        Newroute: '/pages/Service_3'
    },
    {
        title: 'Service 4',
        details: 'cccc ccccc cccc cc ccccc cc ccc ccc ccc cccccc ccc',
        image: Image1,
        Newroute: '/pages/Service_3'
    },
    {
        title: 'Service 4',
        details: 'cccc ccccc cccc cc ccccc cc ccc ccc ccc cccccc ccc',
        image: Image1,
        Newroute: '/pages/Service_3'
    }
    // Add more cards as needed
];

const onSearchClick = () => alert('Finding Vendors');

const Cards = () => {
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
                <Button variant="contained" size="medium" onClick={onSearchClick}>
                    Search
                </Button>
            </div>
            {ServicesSample.map((service, index) => (
                <Services
                    key={index}
                    title={service.title}
                    image={service.image}
                    details={service.details}
                    Newroute={service.Newroute}
                />
            ))}
            <Services cards={ServicesSample} />
            {/* <Button variant="contained" size="medium" path="/">
                Return to home page
            </Button> */}
            <Link to="/">
                <button type="submit" className="button wide tall luxury">
                    Return to home Page
                </button>
            </Link>
        </div>
    );
};
export default Cards;