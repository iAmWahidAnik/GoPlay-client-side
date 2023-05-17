import React from 'react';
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://ubiq.co/tech-blog/wp-content/uploads/2020/11/How-to-Make-a-Custom-404-Page.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hey There !!!</h1>
                    <p className="mb-5">Looks like you've been lost somewhere</p>
                    <Link to='/'><button className="btn btn-primary">Go Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;