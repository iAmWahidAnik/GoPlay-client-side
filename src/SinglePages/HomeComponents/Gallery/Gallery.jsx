import React from 'react';

const Gallery = () => {
    return (
        <div className='my-20'>
            <h1 className='text-5xl font-semibold text-center my-10'>Gallery</h1>
            <div className='flex flex-col lg:flex-row gap-2 mx-auto justify-center items-center'>
                <img className='w-64 h-96 object-cover' src="https://images.unsplash.com/photo-1578652520385-c05f6f3b5de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
                <img className='w-64 h-96 object-cover' src="https://images.unsplash.com/photo-1643208936459-71d966830f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />

                <img className='w-96 object-cover' src="https://images.unsplash.com/photo-1514849615379-fd4b131d5642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />

                <img className='w-64 h-96 object-cover' src="https://images.unsplash.com/photo-1656609119480-0a6d732b24b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="" />
                <img className='w-64 h-96 object-cover' src="https://images.unsplash.com/photo-1572635196184-84e35138cf62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80" alt="" />
            </div>
        </div>
    );
};

export default Gallery;