import React, { useEffect, useState } from 'react';
import BusCard from './BusCard';

const Busses = () => {
    const [busses, setBusses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/busses')
            .then(res => res.json())
            .then(data => setBusses(data))
    }, []);
    return (
        <div className='grid grid-cols-3 gap-5'>
            {
                busses.map(bus => <BusCard key={bus._id} bus={bus}></BusCard>)
            }
        </div>
    );
};

export default Busses;