import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DateTimePicker } from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { MOCK_API } from "../../config";
import { useOutletContext } from "react-router-dom";
import "./Booking.css";

export function Booking() {
    const vendorId = useOutletContext();
    const [services, setServices] = useState();
    useEffect(() => async () => {
        console.log(vendorId)
        if (vendorId === null) {
            return null;
        }

        if (import.meta.env.VITE_REACT_MSW) {
            const res = await fetch(
                `${MOCK_API}/services/vendorId/${vendorId}`
            );
            if (res.status === 404) {
                throw new Response("Not Found", { status: 404 });
            }
            setServices(await res.json());
        }

        console.error("Not yet implemented");
    }, [vendorId])

    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };

    return (
        <React.Fragment>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>Book</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To make an appointment...
                    </DialogContentText>
                    <DateTimePicker label="Time" />
                    <ServiceList services={services} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Book</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

function ServiceList({ services }) {
    const [checked, setChecked] = React.useState([1]);

    const handleToggle = (service) => () => {
        const currentIndex = checked.indexOf(service);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(service);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {services?.map((service) => {
                const labelId = `checkbox-list-secondary-label-${service.name}`;
                return (
                    <ListItem
                        key={service.id}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(service)}
                                checked={checked.indexOf(service) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    alt={`Avatar n°`}
                                    src={`/static/images/avatar/$.jpg`}
                                />
                            </ListItemAvatar>
                            <ListItemText id={labelId} primary={`${service.name}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}