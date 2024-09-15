import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AoutContext } from '../../../provaider/AoutProvider';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
const CardDetails = () => {
    const { user } = useContext(AoutContext);
    const service = useLoaderData();
    const { food_image, food_name, _id, donator_name, food_quantity, expired_datetime, additional_notes, pickup_location, } = service;

    

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse border-[2px] border-green-600">
                <img src={food_image} className=" w-[500px] h-[500px] rounded-lg shadow-2xl" />
                <div>
                    <img className='rounded-full' src={user?.photoURL} alt="" />
                    <p>{user?.displayName}</p>
                    <hr />

                    <div className='space-y-4'>
                        <h1 className="text-5xl font-bold">{food_name}</h1>
                        <div className="flex ">
                            <IoLocationSharp className="mt-2 text-1xl mr-1 text-green-600" />
                            <p className="text-blue-500"><span className="font-bold text-black">pickup_location:</span> {pickup_location}</p>
                        </div>
                        <div className="flex ">
                            <IoIosArrowDropright className="mt-2 text-1xl mr-1 text-green-600" />
                            <p className="text-blue-500"><span className="font-bold text-black">expired_datetime:</span> {expired_datetime}</p>
                        </div>
                        <div className="flex ">
                            <IoIosArrowDropright className="mt-2 text-1xl mr-1 text-green-600" />
                            <p className="text-blue-500"><span className="font-bold text-black">additional_notes:</span> {additional_notes}</p>
                        </div>
                        <div className="flex">
                            <IoIosArrowDropright className="mt-2 text-1xl mr-1 text-green-600" />
                            <p className="text-blue-500"><span className="font-bold text-black">donator_name:</span> {donator_name}</p>
                        </div>
                    </div>
                    <div className="card-actions flex mt-5">
                        <Link to={`/requestFood/${_id}`}>
                            <button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 font-bold text-2xl">Request Food</button>
                        </Link>
                        <Link to="/"><button className="btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600 font-bold text-2xl">Go Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;