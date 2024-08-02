// import React from 'react';
import { useEffect } from 'react';

const FetchAPI = ({ setServicesSample }) => {

    const API_URL = 'https://api.sampleapis.com/cartoons/cartoons2D'

    const getData = async () => {
        try {
            const resp = await fetch(API_URL);
            const json = await resp.json();

            const formattedData = json.map((item, index) => ({
                title: item.title || `Service ${index + 1}`,
                details: item.creator || 'No description available',
                image: item.image || 'https://via.placeholder.com/140', // Placeholder image
                Newroute: `/pages/${item.title}`
            }));

            setServicesSample(formattedData);
        } catch (err) {
            console.error("Failed to fetch data:", err);
        }
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        null
    );
}
export default FetchAPI;