import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    const {_id, castmarname,email, donator_image,food_image,date, pickup_location,food_name,
        additional_notes  } = food;
    return (
        <div >
            <div className="card card-side bg-lime-50 shadow-xl">
                <figure><img className='w-72 p-3 rounded-md' src={food_image} /></figure>
                <div className="card-body">
                    <p>{castmarname}</p>
                    <img className='w-14' src={donator_image} alt="" />
                    <h2 className="">{email}</h2>
                    <h2 className="">{food_name}</h2>
                    <h2 className="">{date}</h2>
                    <h2 className="">{pickup_location}</h2>
                    <h2 className="">{additional_notes}</h2>
                        <Link to={`/Foodditals/${_id}`}className='btn-accent bg-orange-300 rounded p-3'>View Details</Link>
                   
                </div>
            </div>
        </div>
    );
};

export default Food;