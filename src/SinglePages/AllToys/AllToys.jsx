import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const loadedData = useLoaderData();
    useTitle('GoPlay - AllToys')
    const [allToys, setAllToys] = useState(loadedData);

    const handleTableSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;

        fetch(`https://go-play-server-side.vercel.app/alltoys?searchText=${searchText}`)
            .then(res => res.json())
            .then(data => setAllToys(data))
    }
    return (
        <div className='my-20'>
            <div className="overflow-x-auto">
                <form onSubmit={handleTableSearch} action="" className='text-center flex flex-col lg:flex-row gap-5 items-center justify-center my-5'>
                    <input type="text" name='search' placeholder="search" className="input w-1/2 input-bordered" />
                    <input type="submit" className='btn btn-primary' value="search" />
                </form>
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
                            allToys.map(toy => <TableRow key={toy._id} toy={toy}></TableRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;