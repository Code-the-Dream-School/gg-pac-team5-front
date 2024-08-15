import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../../Assets/Profile/Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <h1> Hello! Welcome to your profile.</h1>
            <img src="images/pic1.jpg" alt="Profile Picture"/>
            <h3><em> Beauty Client</em></h3> <br/>
            <h4> 
                Your last beauty appointment was on: 
                <br/> <br/>
                Your upcoming beauty appointment is scheduled on:
            </h4>

            <Link to="/">
                <button> Click to return to the home page</button>
            </Link>
        </div>
    )
}

export default Profile;

