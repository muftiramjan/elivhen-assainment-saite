import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowDropright } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
const Food = ({ food }) => {
    const { _id, castmarname, email, donator_image, food_image, date, pickup_location, food_name,
              additional_notes ,expired_datetime} = food;

  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    transform: isHovered ? 'scale(1.05) rotate(0deg)' : 'scale(1) rotate(0)',
    boxShadow: isHovered ? '0 10px 20px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  return (
    <div
      className="card w-96 bg-base-100 shadow-xl border-[2px] border-green-400 mt-5"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="px-10 pt-10">
        <img src={food_image} alt="" className="rounded-xl h-70" />
      </figure>
      <div className="card-body">
        <div className='flex justify-between'>
        <h2 className="card-title">{food_name}</h2>
        <Link to='/'>
              <button className=" p-2 font-semibold rounded border-green-500 border-[1px]">Availavle</button>
            </Link>
        </div>
        
        <div className="flex justify-center">
     
          <img className='rounded-full' src={donator_image} alt="" />
        </div>
        <div className="flex justify-center">
          <FaRegUser className="mt-2 text-1xl mr-1 text-green-600" />
          <p className="text-blue-500"><span className="font-bold text-black">Castmarname:</span> {castmarname}</p>
        </div>
        <hr />
        <div className="flex justify-center">
          <IoLocationSharp className="mt-2 text-1xl mr-1 text-green-600" />
          <p className="text-blue-500"><span className="font-bold text-black">pickup_location:</span> {pickup_location}</p>
        </div>
       
        <div className="flex justify-center">
          <IoIosArrowDropright className="mt-2 text-1xl mr-1 text-green-600" />
          <p className="text-blue-500"><span className="font-bold text-black">expired_datetime:</span> {expired_datetime}</p>
        </div>
        <div className="flex justify-center">
          <IoIosArrowDropright className="mt-2 text-1xl mr-1 text-green-600" />
          <p className="text-blue-500"><span className="font-bold text-black">email:</span> {email}</p>
        </div>
        <div className="flex justify-center">
          <IoIosArrowDropright className="mt-1 text-2xl mr-1 text-green-600" />
          <p className="text-blue-500"><span className="font-bold text-black">additional_notes:</span> {additional_notes}</p>
        </div>
        <div className="flex justify-center">
          <IoIosArrowDropright className="mt-1 text-1xl mr-1 text-green-600" />
          <p className="text-blue-500"><span className="font-bold text-black">date:</span> {date}</p>
        </div>
       
        <div className="flex justify-between space-x-2">
        
          <div className="card-actions mx-auto mt-4">
          <Link to={`/Foodditals/${_id}`} className='btn btn-outline border-b-8 border-t-8 border-[1px] border-green-600'>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;


