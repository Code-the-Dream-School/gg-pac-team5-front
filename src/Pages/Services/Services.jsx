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

    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {cards.map((card, index) => (
                <Card key={index} sx={{ width: 'calc(40% - 16px)', m: 1, p: 2, border: 1 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={card.image}
                        title={card.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {card.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {card.details}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => navigate(card.Newroute)}>Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Box>
    );
};
export default Services;