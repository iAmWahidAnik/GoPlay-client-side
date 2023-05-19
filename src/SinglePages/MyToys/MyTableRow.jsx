import React from 'react';
import { Link } from 'react-router-dom';

const MyTableRow = ({ toy, handleDelete }) => {
    const { _id, productName, sellerName, subCategory, price, qty } = toy;
    

    return (
        <>
            <tr>
                <td>{sellerName}</td>
                <td>{productName}</td>
                <td>{subCategory}</td>
                <td>{price}</td>
                <td>{qty}</td>
                <td className='flex gap-3'>
                    <Link to={`/updateatoy/${_id}`}><button className='btn btn-primary btn-sm'>Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-primary btn-sm'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default MyTableRow;