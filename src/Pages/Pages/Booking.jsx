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
import { API } from "../../config";
import { useOutletContext } from "react-router-dom";
import styles from "./Shared.module.css";

export function Booking() {
    const vendorId = useOutletContext();
    const [services, setServices] = useState();
    const [servicesCart, setServicesCart] = useState();
    useEffect(() => async () => {
        if (vendorId === null) {
            return null;
        }


        const res = await fetch(
            `${API}/services/vendorId/${vendorId}`
        );
        if (res.status === 404) {
            throw new Response("Not Found", { status: 404 });
        }
        setServices(await res.json());
        return;


    }, [])

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
                className={styles.revertCss}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();

                        if (import.meta.env.VITE_REACT_MSW) {
                            const postAppointment = async () => {
                                let response;
                                try {
                                    response = await fetch("http://localhost:8000/api/v0/appointments", {
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json'
                                        }, method: 'POST', body: JSON.stringify({ serviceIds: servicesCart.map((service) => service.id) })
                                    })
                                    let data = await response.json()


                                } catch (error) {
                                    console.error(error)
                                }
                            }
                            postAppointment();
                        }
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
                    <ServiceList services={services} setServicesCart={setServicesCart} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Book</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

function ServiceList({ services, setServicesCart }) {
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (service) => () => {
        const currentIndex = checked.indexOf(service);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(service);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
        setServicesCart(newChecked);
    };

    return (
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {services?.map((service) => {
                const labelId = `checkbox-list-secondary-label-${service.id}`;
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
                            <ListItemText id={labelId} primary={`${service.name}`} secondary={`$${service.price}`} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
            <ListItemText id="price" primary="Total" secondary={`$${checked?.map((service) => service.price).reduce((price, total) => Number.parseInt(price) + Number.parseInt(total), 0)}`} />
        </List>
    );
}