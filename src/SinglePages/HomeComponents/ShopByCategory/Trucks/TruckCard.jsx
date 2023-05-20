import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../../../../AuthenticationProvider/AuthenticationProvider';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from 'react-icons/fa';

const TruckCard = ({ truck }) => {
    const { user } = useContext(AuthenticationContext);
    const { _id, photoLink, productName, price, rating } = truck;

    const handleNotify = () => {
        if (!user) {
            Swal.fire({
                title: 'You have to log in first to view details',
                html: 'Without a login, you can not visit the single toy details page.',
                icon: 'info',
                focusConfirm: false,
            })
        }
    }
    return (
        <div className="card w-72 lg:w-80 xl:w-96 bg-base-100 shadow-xl">
            <figure><img className='h-72 w-full object-cover' src={photoLink} alt="Truck" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>{price}</p>
                <Rating className='text-primary'
                    placeholderRating={rating} readonly
                    emptySymbol={<FaRegStar></FaRegStar>}
                    placeholderSymbol={<FaStar></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                />
                <div className="card-actions justify-end">
                    <Link onClick={handleNotify} to={user ? `/toy/${_id}` : `/login`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TruckCard;