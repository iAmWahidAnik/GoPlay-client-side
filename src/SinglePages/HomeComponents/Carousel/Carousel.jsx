import React from 'react';

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full h-screen">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/road-mountains-with-cloudy-sky_1340-23022.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/fabulous-landscape-river-mountains-warm-sunset-light-panorama-mountain-peaks-streams-water-from-mountain-lakes-3d-illustration_86390-8994.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfHiaJaqzXDhv-mVG8J1M_UK-6PS8sdtZ4g&usqp=CAU" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;