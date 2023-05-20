import React, { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Gallery = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
    return (
        <div className='my-20 overflow-x-hidden'>
            <h1 className='text-5xl font-semibold text-center my-10'>Gallery</h1>
            <div className='flex flex-col lg:flex-row gap-2 mx-auto justify-center items-center'>
                <img className='w-52 h-96 object-cover animation' data-aos="fade-right" src="https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <img className='w-52 h-96 object-cover animation' data-aos="fade-down" src="https://images.unsplash.com/photo-1573648953114-ce9f86515a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="" />

                <img className='w-96 object-cover animation' data-aos="fade-up" src="https://images.unsplash.com/photo-1514849615379-fd4b131d5642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />

                <img className='w-52 h-96 object-cover animation' data-aos="fade-down" src="https://images.unsplash.com/photo-1486299634843-ec14308c538f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                <img className='w-52 h-96 object-cover animation' data-aos="fade-left" src="https://images.unsplash.com/photo-1515541476948-38234f965898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
        </div>
    );
};

export default Gallery;