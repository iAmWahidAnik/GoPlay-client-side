import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthenticationContext } from '../../AuthenticationProvider/AuthenticationProvider';
import useTitle from '../../hooks/useTitle';

const AddAToy = () => {
    const { user } = useContext(AuthenticationContext);
    useTitle('GoPlay - AddToy');
    const [subCategory, setSubCategory] = useState('');

    const handleAddToy = e => {
        e.preventDefault();
        const form = e.target;

        const photoLink = form.photo.value;
        const productName = form.pname.value;
        const sellerName = form.sname.value;
        const email = form.email.value;

        const price = form.price.value;
        const rating = form.rating.value;
        const qty = form.qty.value;
        const description = form.description.value;

        const toy = { photoLink, productName, sellerName, email, subCategory, price, rating, qty, description }

        fetch('https://go-play-server-side.vercel.app/addatoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'You has been successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error?.message,
                })
            })
    }
    return (
        <div className='bg-slate-200 py-10 my-20 shadow-lg rounded-lg'>
            <form onSubmit={handleAddToy} action="" className='p-10'>
                <h1 className='text-center text-3xl font-bold text-primary my-5 '>Add A Toy</h1>
                {/* first row  */}
                <div>
                    <div>
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" required name='photo' placeholder="photo url" className="input w-full" />
                    </div>
                </div>
                {/* second row  */}
                <div className='flex gap-10 my-5'>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" required name='pname' placeholder="product name" className="input w-full" />
                    </div>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" required name='sname' defaultValue={user?.displayName} placeholder="seller name" className="input w-full" />
                    </div>
                </div>
                {/* third row  */}
                <div className='flex gap-10 my-5'>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="email" required name='email' readOnly value={user?.email} placeholder="email" className="input w-full" />
                    </div>
                    <div className='w-full'>
                        {/* select options */}
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select required onChange={(e) => setSubCategory(e.target.value)} className="select w-full">
                            <option disabled selected>Pick your sub-category</option>
                            <option value='car'>Car</option>
                            <option value='truck'>Truck</option>
                            <option value='bus'>Bus</option>
                        </select>
                    </div>
                </div>
                {/* fourth row  */}
                <div className='flex gap-10 my-5'>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" required name='price' placeholder="price $" className="input w-full" />
                    </div>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" required name='rating' placeholder="rating" className="input w-full" />
                    </div>
                </div>
                {/* fifth row  */}
                <div className='flex gap-10 my-5'>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" required name='qty' placeholder="available quantity" className="input w-full" />
                    </div>
                    <div className='w-full'>
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <textarea required name='description' placeholder="detail description ..." className="textarea textarea-bordered textarea-xs w-full" ></textarea>
                    </div>
                </div>
                <div className='pt-3'>
                    <input className="btn btn-block btn-primary" type="submit" value="Add Toy" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;