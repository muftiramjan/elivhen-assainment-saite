import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slaid1 from "../../assets/img/1.jpg"
import slaid2 from "../../assets/img/2.jpg"
import slaid4 from "../../assets/img/4.jpg"
import slaid5 from "../../assets/img/3.jpg"
import { Link } from 'react-router-dom';

const Benar = () => {
    return (
        <div loop={true} className="carousel h-[600px] mt-4">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={slaid1} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full rounded-xl flex items-center bg-gradient-to-r from-black via-transparent to-black bg-opacity-50">
                    <div className="space-y-7 w-1/2 pl-7 text-white">
                        <h1 className="text-4xl font-bold drop-shadow-md">
                            Delicious Food <br /> At Your <br /> Doorstep
                        </h1>
                        <p className="text-lg font-bold drop-shadow-md">
                            Enjoy the best food from the comfort of your home.
                        </p>
                        <Link to='/Foods'>                        
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">View Full Menu</button>
                        </Link>
                        <Link to={`/AddFood`}>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Order Now</button>
                        </Link>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slaid2} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 rounded-xl h-full flex items-center bg-gradient-to-r from-black via-transparent to-black bg-opacity-50">
                    <div className="space-y-7 w-1/2 pl-7 text-white">
                        <h1 className="text-4xl font-bold drop-shadow-md">
                            Taste the <br /> Difference
                        </h1>
                        <p className="text-lg font-bold drop-shadow-md">
                            Fresh ingredients, great taste.
                        </p>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Explore Menu</button>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slaid5} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full rounded-xl flex items-center bg-gradient-to-r from-black via-transparent to-black bg-opacity-50">
                    <div className="space-y-7 w-1/2 pl-7 text-white">
                        <h1 className="text-4xl font-bold drop-shadow-md">
                            Savor Every <br /> Bite
                        </h1>
                        <p className="text-lg font-bold drop-shadow-md">
                            Delight in every dish we serve.
                        </p>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Discover More</button>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={slaid4} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full rounded-xl flex items-center bg-gradient-to-r from-black via-transparent to-black bg-opacity-50">
                    <div className="space-y-7 w-1/2 pl-7 text-white">
                        <h1 className="text-4xl font-bold drop-shadow-md">
                            A Culinary <br /> Experience
                        </h1>
                        <p className="text-lg font-bold drop-shadow-md">
                            Bringing gourmet food to your table.
                        </p>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Explore Menu</button>
                        <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 text-white">Order Now</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Benar;
