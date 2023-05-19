import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://go-play-server-side.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
            }
        </div>
    );
};

export default Cars;