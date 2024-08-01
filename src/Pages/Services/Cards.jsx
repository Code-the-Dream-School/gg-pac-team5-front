import React from 'react';
import { Link } from 'react-router-dom';
import Services from './Services';
import Image1 from '../../Assets/Services/salon-service-1.jpg'

const ServicesSample = [
    {
        title: 'Service 1',
        details: 'aaaa aaaaa aaaaaaa aaaaaaa aaaaa aaaaaaaaaa aaaa aa aaaaa aa',
        image: Image1,
        Newroute: '/pages/Service_1'
    },
    {
        title: 'Service 2',
        details: 'bbbb bbbb bbbbb bbbbb bbbb bbbbb ',
        image: Image1,
        Newroute: '/pages/Service_2'
    },
    {
        title: 'Service 3',
        details: 'cccc ccccc cccc cc ccccc cc ccc ccc ccc cccccc ccc',
        image: Image1,
        Newroute: '/pages/Service_3'
    }
]

const Cards = () => {
    return (
        <>
            {ServicesSample.map((service, index) => (
                <Services
                    key={index}
                    title={service.title}
                    image={service.image}
                    details={service.details}
                    Newroute={service.Newroute}
                />
            ))}
            <Link to="/">
                <button type="submit" className="button wide tall luxury">
                    Return to home page
                </button>
            </Link>
        </>
    );
}
export default Cards;