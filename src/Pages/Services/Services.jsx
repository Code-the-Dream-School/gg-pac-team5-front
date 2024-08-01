import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const Services = ({ title, image, details, Newroute }) => {
    const navigate = useNavigate();
    const handleServices = () => {
        navigate(Newroute);
    };
    return (
        <div>
            <Card sx={{ maxWidth: 345, m: 2, p: 2, border: 1 }} >
                <CardMedia
                    sx={{ height: 140 }}
                    image={image}
                    title={title}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {details}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button size="small" onClick={handleServices}>Learn More</Button>
                </CardActions>
            </Card >
        </div>
    );
}

export default Services;
