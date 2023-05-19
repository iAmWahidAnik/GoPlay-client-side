import React, { useEffect, useState } from 'react';
import BusCard from './BusCard';

const Busses = () => {
    const [busses, setBusses] = useState([]);
    useEffect(() => {
        fetch('https://go-play-server-side.vercel.app/busses')
            .then(res => res.json())
            .then(data => setBusses(data))
    }, []);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                busses.map(bus => <BusCard key={bus._id} bus={bus}></BusCard>)
            }
        </div>
    );
};

export default Busses;