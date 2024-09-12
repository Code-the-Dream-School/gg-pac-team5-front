/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from "../../Assets/Profile/Profile.module.css";

const ExpandMore = styled(({ expand, ...props }) => (
  <IconButton {...props} />
))(({ theme, expand }) => ({
  transform: expand ? 'rotate(0deg)' : 'rotate(180deg)',
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
  const [editMode, setEditMode] = useState(false);
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const emailTo = 'Enter email here';
  const emailSubject = 'Check out our beauty services!';
  const emailBody = `Hi there,
 
 I wanted to share this beauty services page with you. 
 There are so many options to relax and unwind! Check it out!
 
 Best regards,
 [Satisfied Client]`;

  return (
    <Box sx={{ display: 'flex', gap: '2em', flexWrap: 'wrap', padding: '2em', alignItems: 'center' }}>
      {/* Profile Overview Card */}
      <Card className={styles.profile} variant="outlined" sx={{ padding: 3, maxHeight: '350px' }}>
        <CardContent>
          <img src="/images/pic1.jpg" alt="Default Profile Picture" style={{ width: '7em' }} />
          <Typography variant="h5" component="div">
            Overview
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Hello! Welcome to your profile.
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            Today is {currentDate}.
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <Button size="medium">Return to the home page</Button>
          </Link>
        </CardActions>
      </Card>

      {/* Appointment Reminders Card */}
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
            <Button size="medium">Book your next appointment</Button>
          </Link>
        </CardActions>
      </Card>

      {/* Services Overview Card */}
      <Card sx={{ minWidth: 345, padding: 5 }}>
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
          <Button size="medium" component="a" href={`mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}>
  Share via Email
</Button>
        </CardActions>
      </Card>

      {/* Card Four for Account Details */}
      <Card sx={{ maxHeight: 700, minWidth: 700 }}>
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
        <CardActions>
          <ExpandMore
            expand={expanded}
            onClick={handleExpand}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {editMode ? (
              <Box>
                <TextField
                  fullWidth
                  label="Location"
                  variant="outlined"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" onClick={handleSave} sx={{ mr: 2 }}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleCancel}>
                  Cancel
                </Button>
              </Box>
            ) : (
              <Box>
                <Typography>Location: {location || ''}</Typography>
                <Typography>Email Address: {email || ''}</Typography>
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" color="primary" onClick={handleEdit}>
                    Edit
                  </Button>
                  <Button variant="outlined" color="error" sx={{ ml: 2 }}>
                    Delete
                  </Button>
                </Box>
              </Box>
            )}
          </CardContent>
        </Collapse>
      </Card>
    </Box>
  );
}