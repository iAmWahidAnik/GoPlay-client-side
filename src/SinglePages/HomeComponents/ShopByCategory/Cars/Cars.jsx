import React, { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
            }
        </div>
    );
};

export default Cars;