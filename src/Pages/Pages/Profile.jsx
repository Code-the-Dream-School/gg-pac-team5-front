import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../../Assets/Profile/Profile.module.css";

const ExpandMore = styled(({ expand, ...other }) => {
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function BasicCard() {
  const date = new Date();
  const currentDate = date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

  return (
  
    <Box sx={{ display: 'flex', gap: '2em', flexWrap: 'wrap', 
        padding: '2em', alignItems: 'center' }}
    >
        
        {/* Card One for Profile Overview */}
        <Card className={styles.profile} variant="outlined" sx={{padding: 3, maxHeight: '350px'}}>
            <CardContent>
            <img src="/images/pic1.jpg" alt="Default Profile Picture" style={{ width: '7em' }} />

            <Typography variant="h5" component="div">
            Profile Overview
            </Typography>

            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Hello! Welcome back to your profile.         
            </Typography>

            <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Today is {currentDate}.          
            </Typography>
            </CardContent>
            <CardActions>

            <Link to="/">
                <Button size="small">Return to the home page </Button>
            </Link>
            </CardActions>
        </Card>

        {/* Card Two for Services Overview */}
        <Card variant="outlined" sx={{ padding: 5, maxHeight: '350px' }}>
            <CardContent>

            <Typography variant="h5" component="div">
            Appointment Reminders
            </Typography>

            <Typography variant="body1" sx={{ mt: 3 }}>
            Your last beauty appointment was on: July 22, 2024.
            <br /> 
            Your upcoming beauty appointment is scheduled on: September 13, 2024.
            </Typography>

            </CardContent>
            <CardActions>
                
            <Link to="/pages">
                <Button size="small">Book your next appointment</Button>
            </Link>
            </CardActions>
        </Card>
        
        {/* Card Three for Salon Photo */}
        <Card sx={{ minWidth: 345, padding: 5}}>
            <CardMedia
                sx={{ height: 140 }}    
                image="/images/pic4.jpg" 
                title="Sample Salon Photo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Services Overview
                </Typography>

                <Typography variant="body2" color="text.secondary">
                Explore our wide range of beauty services
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                {/* Insert link to share beauty services here-- maybe via email? */}
            </CardActions>
        </Card>

{/* Card Four for Account Details */}
    <Card sx={{ maxHeight: 500, minWidth: 700 }}>
      <CardMedia
        component="img"
        height="140"
        image="/images/pic3.jpg" 
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                Account Settings
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Click the arrow below to access your account settings.
            </Typography>

      </CardContent>
      <CardActions >
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography>
        {/* Add in input buttons to change, edit, and delete information */}
        Location:<br/>
        Email Address: <br/>
        Profile Picture: <br/>         
        </Typography>
        </CardContent>
      </Collapse>

    </Card>
</Box>
  );
}