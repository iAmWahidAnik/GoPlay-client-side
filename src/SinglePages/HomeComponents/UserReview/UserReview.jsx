import React, { useEffect } from 'react';
import { FaWaze } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css'

const UserReview = () => {
    useEffect(() => {
        AOS.init({duration: 2000})
    },[])
    return (
        <div className='bg-violet-500 my-20 rounded-lg shadow-lg'>
            <h1 className='text-3xl py-10 text-center'>Testimonials</h1>
            <div><FaWaze className='mx-auto text-6xl text-white'></FaWaze></div>
            <div className='flex flex-col lg:flex-row gap-10 p-10 text-center'>
                <div className='lg:w-1/2 animation' data-aos="flip-down">
                    <p className='text-white'>they are very professional, consectetur adipisicing elit. Iure molestiae nobis at fugiat voluptates nihil maxime magnam cum facere, in aspernatur fuga qui corrupti exercitationem cumque soluta quod? Perferendis, nisi.</p>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-10 mb-5">
                            <img src="https://m.media-amazon.com/images/M/MV5BMjFiZGZhMTktNjE2NS00YTBiLWJlOTUtYjdmYjI3ODEyOWFiXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_.jpg" />
                        </div>
                    </div>
                    <p className='text-xl'><span className='font-semibold text-white'>Paulo Maldili,</span> Footballer</p>
                </div>
                <div className='lg:w-1/2 animation' data-aos="flip-down">
                    <p className='text-white'>they are very professional, consectetur adipisicing elit. Iure molestiae nobis at fugiat voluptates nihil maxime magnam cum facere, in aspernatur fuga qui corrupti exercitationem cumque soluta quod? Perferendis, nisi.</p>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-10 mb-5">
                            <img src="https://derivates.kicker.de/image/fetch/w_1200,h_900,c_fill,g_auto,q_auto:best/http://mediadb.kicker.de/news/1000/1020/1100/8000/8401/artikel02/874659/puyol800-1490912289.jpg" />
                        </div>
                    </div>
                    <p className='text-xl'><span className='font-semibold text-white'>Carles Puyol,</span> Footballer</p>
                </div>
            </div>
        </div>
    );
};

export default UserReview;