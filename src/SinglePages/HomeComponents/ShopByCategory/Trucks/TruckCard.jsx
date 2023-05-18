import React from 'react';

const TruckCard = ({ truck }) => {
    const { _id, photoLink, productName, price, rating } = truck;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72 w-full object-cover' src={photoLink} alt="bus" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{price}</p>
                <p>{rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default TruckCard;