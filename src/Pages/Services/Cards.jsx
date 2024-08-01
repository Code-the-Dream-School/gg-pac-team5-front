import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image1 from '../../Assets/Services/salon-service-1.jpg'
import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";

const Cards = () => {
    // const { pageName } = useParams();
    const navigate = useNavigate();

    const handleServices = () => {
        navigate('pageName');
    };
    return (
        <Card sx={{ maxWidth: 345, m: 2, p: 2, border: 1 }} >
            <CardMedia
                sx={{ height: 140 }}
                image={Image1}
                title="green iguana"
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    Service 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                    vel sed culpa iste enim ve libero illum odit....
                </Typography>
            </CardContent>
            <CardActions >
                <Button size="small" onClick={handleServices}>Learn More</Button>
            </CardActions>
        </Card >
    );
}

export default Cards;
