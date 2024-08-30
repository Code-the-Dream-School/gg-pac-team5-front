import { useEffect } from 'react';

const FetchAPI = ({ setServicesSample, searchQuery }) => {

    // const API_URL = 'https://api.sampleapis.com/cartoons/cartoons2D';
    const API_URL = "http://localhost:8000/api/v1/vendors"

    const getData = async () => {
        try {
            const resp = await fetch(API_URL);
            const json = await resp.json();

            const filteredData = json.vendors.filter((item) => {
                return item.name.toLowerCase().includes(searchQuery.toLowerCase());
            });

            const formattedData = filteredData.map((item, index) => ({

                name: item.name || `Service ${index + 1}`,
                street: item.street,
                city: item.city || 'No description available',
                state: item.state,
                zip: item.zip,
                country: item.country,
                image: item.image || 'https://via.placeholder.com/140', // Placeholder image
                Newroute: `/pages/${item.name}`
            }));

            setServicesSample(formattedData);
        } catch (err) {
            console.error("Failed to fetch data:", err);
        }
    }
    // Only fetch data when searchQuery changes and a new search is triggered
    useEffect(() => {
        if (searchQuery) {
            getData();
        }
    }, [searchQuery, setServicesSample]);

}
export default FetchAPI;