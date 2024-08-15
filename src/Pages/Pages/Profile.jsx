import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../../Assets/Profile/Profile.module.css";


function Profile() {
    return (
        <div className={styles.profile}>
            <h1> Hello! <br/> </h1>
            <h2> Welcome to your profile!</h2>
            <img src="images/pic1.jpg" alt="Profile Picture"/>
            <h3><em> Beauty Client</em></h3>
            <h4> 
                Your last beauty appointment was on: 
                <br/>
                Your upcoming beauty appointment is scheduled on:
            </h4>


            <Link to="/">
                <button> Click to return to the home page</button>
            </Link>
        </div>
    )
}

export default Profile;

