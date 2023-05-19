import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                
                <h1 className='text-5xl font-semibold'>GoPlay</h1>
                <p>GoPlay Industries Ltd.<br />Providing reliable toys since 2023</p>
            </div>
            <div>
                <span className="footer-title">Socials</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Google+</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Contact</span>
                <a className="link link-hover">goplay@playgo.com</a>
                <a className="link link-hover">+880 0114 455 5887</a>
                <a className="link link-hover">247 Park Avenue</a>
            </div>
        </footer>
    );
};

export default Footer;