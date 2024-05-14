import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AoutContext } from '../../../provaider/AoutProvider';

const Carditels = () => {
    const {user}=useContext(AoutContext);
    const service = useLoaderData();
    const { food_image, food_name, _id ,food_quantity,expired_datetime,additional_notes,pickup_location,} = service;
    console.log(service);
    fetch(`https://car-doctor-server-nine-gilt.vercel.app/carServes/${_id}`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(service)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('order confarmeteded')
            }
        })
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={food_image} className=" w-[500px] h-[500px] rounded-lg shadow-2xl" />
    <div>
      <img className='rounded-full' src={user?.photoURL} alt="" />
      <p>{user?.displayName}</p>
      <h1 className="text-5xl font-bold">{food_name}</h1>
      <p className="py-6">food_quantity: {food_quantity}</p>
      <p className="py-6">expired_datetime: {expired_datetime}</p>
      <p className="py-6">additional_notes: {additional_notes}</p>
      <p className="py-6">pickup_location:{pickup_location}</p>
  <Link to="/"><button className="btn btn-primary">Bac to Home</button></Link>
    </div>
  </div>
</div>
    );
};

export default Carditels;