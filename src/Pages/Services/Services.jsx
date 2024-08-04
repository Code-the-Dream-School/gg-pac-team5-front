import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Services = ({ cards = [] }) => {

    const navigate = useNavigate();


    const handleServices = () => {
        navigate(Newroute);
    };
    return (
        <div>
            <Card sx={{ m: 1, p: 1, border: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                <CardMedia
                    sx={{ height: 240, border: 1 }}
                    image={image}
                    title={title}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        {details}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size="large" onClick={handleServices} variant="contained" >Learn More</Button>
                </CardActions>
            </Card >
        </div>
    );
}

export default Services;