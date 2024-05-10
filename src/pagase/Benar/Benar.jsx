

import benar2 from "../../assets/images/banner/2.jpg"
import benar3 from "../../assets/images/banner/3.jpg"
import benar4 from "../../assets/images/banner/4.jpg"
import benar5 from "../../assets/images/banner/5.jpg"

const Benar = () => {
    return (
        <div loop={true} className="carousel h-[600px] mt-4 ">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={benar5} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 w-1/2 pl-7">
                        <h1 className="text-4xl font-bold text-white">
                            Affordable Price <br /> For Car <br /> Servicing
                        </h1>
                        <p className="text- font-bold text-white">There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={benar2} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0  rounded-xl h-full flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 w-1/2 pl-7">
                        <h1 className="text-4xl font-bold text-white">
                            Affordable Price <br /> For Car <br /> Servicing
                        </h1>
                        <p className="text- font-bold text-white">There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={benar3} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 w-1/2 pl-7 ">
                        <h1 className="text-4xl font-bold text-white">
                            Affordable Price <br /> For Car <br /> Servicing
                        </h1>
                        <p className="text- font-bold text-white">There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={benar4} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full  rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 w-1/2 pl-7 ">
                        <h1 className="text-4xl font-bold text-white">
                            Affordable Price <br /> For Car <br /> Servicing
                        </h1>
                        <p className="text- font-bold text-white">There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={benar5} className="w-full rounded-xl" />
                <div className="absolute left-0 right-0 h-full rounded-xl  flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="space-y-7 w-1/2 pl-7 rounded-xl">
                        <h1 className="text-4xl font-bold text-white">
                            Affordable Price <br /> For Car <br /> Servicing
                        </h1>
                        <p className="text- font-bold text-white">There are many variations of passages of  available, but the <br /> majority have suffered alteration in some form</p>
                        <button className="btn btn-secondary mr-5">Discover More</button>
                        <button className="btn btn-outline btn-secondary">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Benar;