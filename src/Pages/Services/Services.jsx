import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <h1>Find Services</h1>
            <Link to="/">
                <button type="submit" className="button wide tall luxury">
                    Return to home page
                </button>
            </Link>
        </div>
    );
}

export default Services;
