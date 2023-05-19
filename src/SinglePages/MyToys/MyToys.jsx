import React, { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../../AuthenticationProvider/AuthenticationProvider';
import MyTableRow from './MyTableRow';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const MyToys = () => {
    const [allToys, setAllToys] = useState([]);
    const { user } = useContext(AuthenticationContext);
    const [sortPrice, setSortPrice] = useState(1); 
    useTitle('GoPlay - MyToys')
    useEffect(() => {
        fetch(`https://go-play-server-side.vercel.app/alltoys?user=${user?.email}&sort=${sortPrice}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [user, sortPrice]);

    // delete operation 
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://go-play-server-side.vercel.app/toy/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        const remaining = allToys.filter(toy => toy._id !== id);
                        setAllToys(remaining)
                        Swal.fire(
                            'Deleted!',
                            'Your toy has been deleted.',
                            'success'
                        )
                    })
            }
        })
    }
    return (
        <div className='my-20'>
            <div className="tabs gap-5 my-10">
                <button onClick={() => setSortPrice(1)} className="tab btn btn-primary">start from lowest price</button>
                <button onClick={() => setSortPrice(-1)} className="tab btn btn-primary">start from maximum price</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allToys.map(toy => <MyTableRow key={toy._id} toy={toy} handleDelete={handleDelete}></MyTableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;