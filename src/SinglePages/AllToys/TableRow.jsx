import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthenticationContext } from '../../AuthenticationProvider/AuthenticationProvider';
import Swal from 'sweetalert2';

const TableRow = ({ toy }) => {
    const { user } = useContext(AuthenticationContext);
    const { _id, productName, sellerName, subCategory, price, qty, description } = toy;


    const handleNotify = () => {
        if (!user) {
            Swal.fire({
                title: 'Please Login First',
                html: 'To see view more about the product',
                icon: 'info',
                focusConfirm: false,
            })
        }
    }
    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{productName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td>
                    <Link onClick={handleNotify} to={`/toy/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </td>
            </tr>
        </>
    );
};

export default TableRow;