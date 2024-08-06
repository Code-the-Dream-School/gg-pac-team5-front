import { useEffect } from 'react';

const FetchAPI = ({ setServicesSample, searchQuery }) => {

    const API_URL = 'https://api.sampleapis.com/cartoons/cartoons2D';

    const getData = async () => {
        try {
            const resp = await fetch(API_URL);
            const json = await resp.json();

            const filteredData = json.filter((item) => {
                return item.title.toLowerCase().includes(searchQuery.toLowerCase());
            });

            const formattedData = filteredData.map((item, index) => ({
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
    // Only fetch data when searchQuery changes and a new search is triggered
    useEffect(() => {
        if (searchQuery) {
            getData();
        }
    }, [searchQuery, setServicesSample]);

}
export default FetchAPI;