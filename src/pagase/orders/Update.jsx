import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AoutContext } from '../../provaider/AoutProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
    const servis = useLoaderData();
    const { donator_name, food_image,  food_quantity, additional_notes, pickup_location } = servis;
    const { user } = useContext(AoutContext)
    const {orders ,setorders}=useState([]);
    const handeleconfrim = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const donator_image = form.donator_image.value;
        const food_image = form.food_image.value;
        const food_quantity = form.food_quantity.value;
        const date = form.date.value;
        const additional_notes = form.additional_notes.value;
        const pickup_location = form.pickup_location.value;

        const order = {
            castmarname: name,
            email, donator_image, food_quantity, date, additional_notes, pickup_location, food_image


        }
        console.log(order);
        // const handeleconfrim = id => {
            fetch(`https://car-doctor-server-nine-gilt.vercel.app/orders/${id}`,{
                method:"PATCH",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confrim'})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount){
                        // updet
                        const remaining = orders.filter(order => order._id !== id)
                        const update =orders.find(order => order._id === id)
                        update.status= 'confrim'
                        const neworders=[update,...remaining];
                        setorders(neworders)
    
                    }
                })
            }
        
    return (
        <div>
            <p>{donator_name}</p>
            <div className="card-body">
                <form onSubmit={handeleconfrim}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">customerName </span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">food_image</span>
                            </label>
                            <input type="food_image" name='food_image' defaultValue={food_image} className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">donator_image</span>
                            </label>
                            <input name='donator_image' defaultValue={user?.photoURL} className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">food_quantity</span>
                            </label>
                            <input type="food_quantity" name='food_quantity' defaultValue={food_quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">date</span>
                            </label>
                            <input type="date" name='date' className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">additional_notes</span>
                            </label>
                            <input type="additional_notes" name='additional_notes' defaultValue={additional_notes} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">pickup_location</span>
                            </label>
                            <input type="pickup_location" name='pickup_location' defaultValue={pickup_location} className="input input-bordered" />

                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <input  className="btn btn-primary" type="submit" value="submit" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>



    );
};

export default Update;