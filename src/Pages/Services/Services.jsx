import React from 'react';
// Material UI Components
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

const Services = ({ name, image, street, city, zip, country, description, email, phone }) => {
    return (
        <div>
            <Card sx={{ m: 1, p: 0, border: 0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                <CardMedia
                    sx={{ height: 240 }}
                    image={image}
                    name={name} />
                <CardContent >
                    <Typography gutterBottom component="div" variant="h5" sx={{ fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    <Typography color="text.secondary">
                        <Typography component="span" fontWeight={'fontWeightBold'} color="text.secondary">Address: </Typography>
                        <br />{street}, {city},
                    </Typography>
                    <Typography color="text.secondary">
                        {country}, {zip}
                    </Typography>
                    <Typography color="text.secondary">
                        <Typography component="span" fontWeight={'fontWeightBold'} color="text.secondary">Email: </Typography>
                        {email}
                    </Typography>
                    <Typography color="text.secondary">
                        <Typography component="span" fontWeight={'fontWeightBold'} color="text.secondary"> Phone: </Typography>
                        {phone}
                    </Typography>
                    <br />
                    <Typography color="text.secondary">
                        <Typography component="span" fontWeight={'fontWeightBold'} color="text.secondary">Services: </Typography>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Link to={`${name}`}>
                        <Button size="medium" variant="contained" sx={{ textTransform: 'capitalize', fontWeight: 'bold' }}>Make an Appointment</Button>
                    </Link>
                </CardActions>
            </Card >
        </div >
    );
}
export default Services;