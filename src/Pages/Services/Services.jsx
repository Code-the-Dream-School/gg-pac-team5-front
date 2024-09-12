import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Services = ({ name, image, street, city, zip, country }) => {

    // const navigate = useNavigate();
    // const handleServices = () => {
    //     // navigate(Newroute);
    //     if (Newroute) {
    //         // alert(Newroute)
    //         navigate(Newroute);
    //     } else {
    //         alert("No route provided for navigation.");
    //     }
    // };
    return (
        <div>
            <Card sx={{ m: 1, p: 1, border: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
                <CardMedia
                    sx={{ height: 240, border: 1 }}
                    image={image}
                    name={name}
                />
                <CardContent >
                    <Typography gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography color="text.secondary">
                        {street}, {city}, {zip}
                    </Typography>
                    <Typography color="text.secondary">
                        {country}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Link to={`${encodeURIComponent(name)}`}>
                        <Button size="large" variant="contained">Learn More</Button>
                    </Link>
                    {/* <Link to={`pages/${name}`}> <Button size="large" variant="contained" >Learn More</Button></Link> */}
                    {/* <Button size="large" onClick={handleServices} variant="contained" >Learn More</Button> */}
                </CardActions>
            </Card >
        </div>
    );
}
export default Services;