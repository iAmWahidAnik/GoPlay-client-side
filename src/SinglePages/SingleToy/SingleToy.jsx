import React from 'react';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaRegStar } from "react-icons/fa";

const SingleToy = () => {
    const toy = useLoaderData();
    const { photoLink, productName, sellerName, email, subCategory, price, rating, qty, description } = toy;
    return (
        <div className='text-center my-20'>
            <img className='w-full h-auto object-cover' src={photoLink} alt="" />
            <h3 className='text-3xl my-5 text-primary font-semibold'>{productName}</h3>
            <h4 className='text-gray-500'>Seller : {sellerName}</h4>
            <p className='text-gray-500'>Seller Email : {email}</p>
            <p className='font-bold text-primary my-5'>Sub-Category : {subCategory}</p>
            <p className='text-gray-500'>Price : ${price}</p>
            <Rating className='text-primary'
                placeholderRating={rating} readonly
                emptySymbol={<FaRegStar></FaRegStar>}
                placeholderSymbol={<FaStar></FaStar>}
                fullSymbol={<FaStar></FaStar>}
            />

            <p className='my-5 text-gray-500'>{description}</p>

            <button className='btn btn-primary my-5'>buy now</button>
        </div>
    );
};

export default SingleToy;