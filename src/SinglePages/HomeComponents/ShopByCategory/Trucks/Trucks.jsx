import React, { useEffect, useState } from 'react';
import TruckCard from './TruckCard';

const Trucks = () => {
    const [trucks, setTrucks] = useState([]);
    useEffect(() => {
        fetch('https://go-play-server-side.vercel.app/trucks')
            .then(res => res.json())
            .then(data => setTrucks(data))
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                trucks.map(truck => <TruckCard key={truck._id} truck={truck}></TruckCard>)
            }
        </div>
    );
};

export default Trucks;