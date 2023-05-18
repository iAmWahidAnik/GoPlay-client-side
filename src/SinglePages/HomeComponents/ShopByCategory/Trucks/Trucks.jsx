import React, { useEffect, useState } from 'react';
import TruckCard from './TruckCard';

const Trucks = () => {
    const [trucks, setTrucks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/trucks')
            .then(res => res.json())
            .then(data => setTrucks(data))
    }, []);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                trucks.map(truck => <TruckCard key={truck._id} truck={truck}></TruckCard>)
            }
        </div>
    );
};

export default Trucks;