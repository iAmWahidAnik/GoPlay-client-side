import React, { useEffect } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'

const FeaturedSellers = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
    return (
        <div>
            <div className='my-20 flex flex-col lg:flex-row justify-between items-center'>
                <div className='w-full lg:w-2/3'>
                    <p className='text-primary font-semibold border-l-8 border-indigo-600 ps-2 ms-1 my-3'>Featured</p>
                    <h1 className='text-5xl font-bold text-gray-700'>Meet Our Featured <br /> Sellers</h1>
                </div>
                <div className='w-full lg:w-1/3'>
                    <p className='text-gray-400 leading-7'>There are many variations of passages of available but majority have suffered in some form, by humou or randomised words which don't look even.</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-20 w-11/12 mx-auto overflow-x-hidden'>
                <div data-aos="fade-down-right" className='w-80 animation'>
                    <img className='w-80 h-96 object-cover' src="https://images.unsplash.com/photo-1585261941984-0145bb423997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="" />
                    <div className='flex justify-between items-center my-5'>
                        <div>
                            <p className='text-3xl font-bold'>Tree Beard</p>
                            <p className='text-xl font-semibold'>Car Seller</p>
                        </div>
                        <div>
                            <button className='py-5 px-5 bg-primary text-white'>
                                <FaShareAlt className='text-xl'></FaShareAlt>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-aos="flip-left" className='w-80 animation'>
                    <img className='w-80 h-96 object-cover' src="https://images.unsplash.com/photo-1595139280770-95b6de5f0635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=471&q=80" alt="" />
                    <div className='flex justify-between items-center my-5'>
                        <div>
                            <p className='text-3xl font-bold'>Cos Aristeides</p>
                            <p className='text-xl font-semibold'>Truck Seller</p>
                        </div>
                        <div>
                            <button className='py-5 px-5 bg-primary text-white'>
                                <FaShareAlt className='text-xl'></FaShareAlt>
                            </button>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down-left" className='w-80 animation'>
                    <img className='w-80 h-96 object-cover' src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" alt="" />
                    <div className='flex justify-between items-center my-5'>
                        <div>
                            <p className='text-3xl font-bold'>Mr. Minion</p>
                            <p className='text-xl font-semibold'>Bus Seller</p>
                        </div>
                        <div>
                            <button className='py-5 px-5 bg-primary text-white'>
                                <FaShareAlt className='text-xl'></FaShareAlt>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSellers;